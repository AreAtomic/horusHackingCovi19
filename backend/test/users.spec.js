import server from '../server'
import chai from 'chai'
import chaiHttp from 'chai-http'
import User from '../app/models/user'
import { createUser } from './helpers/generatorHelper'
import { d } from './helpers/loggerHelper'
import { hashSync } from 'bcrypt-nodejs'
import { compareSync } from 'bcrypt-nodejs'

chai.use(chaiHttp)
const requester = chai.request(server).keepOpen()
chai.should()

/*
 * Test login de l'utilisateur
 *  1 Login with wrong combination
 *  2 Login with correct combination
 *  3 Authentification with the token
 */
describe('[MODEL] User', function () {
  let currentUser
  let token
  this.timeout(20000)
  /*
     * Test the /GET route
     */
  describe('/GET auth', () => {
    before(done => {
      // on créé un utilisateur
      currentUser = createUser()
      User.create(currentUser)
        .then(user => {
          currentUser.id = user.id
          done()
        })
        .catch(err => done(err))
    })

    it('1 - Should refuse to Login with a wrong combination', done => {
      let wrongEmail = 'wrongEmail'
      let wrongPassword = 'wrongPassword'

      requester
        .post('/api/v1/users/authenticate')
        .send({
          email: wrongEmail,
          password: wrongPassword
        })
        .then(res => {
          // Accés refusé
          res.should.have.status(403)
          done()
        })
    })

    it('2 - Should accept to Login with a correct combination', done => {
      let rightEmail = currentUser.email
      let rightPassword = currentUser.password

      requester
        .post('/api/v1/users/authenticate')
        .send({
          email: rightEmail,
          password: rightPassword
        })
        .then(res => {
          res.should.have.status(200)
          res.body.data.should.have.property('token')
          token = res.body.data.token
          done()
        })
    })
    it('3 - Should now authenticate us with the token', done => {
      requester
        .get('/api/v1/users/me')
        .set({
          'x-access-token': token
        })
        .then(res => {
          res.should.have.status(200)
          res.body.should.have.property('user')
          done()
        })
    })
  })
  /*
     * Test the /POST route
     */
  describe('/POST auth', () => {
    before(done => {
      User.deleteMany({}, err => {
        if (err) done(err)
        done()
      })
    })
    it('1.a - Create an user', done => {
      requester
        .post('/api/v1/users')
        .send({
          lastName: 'Dorcel',
          firstName: 'Mickael',
          pseudo: 'MikaBarberStreet',
          email: 'mika@gmail.com',
          password: 'azerty'
        })
        .then(res => {
          //* the user was created
          res.should.have.status(200)
          User.findOne(
            {
              email: 'mika@gmail.com'
            },
            (err, user) => {
              if (err) done(err)
              user.lastName.should.be.eql('Dorcel')
              done()
            }
          )
        })
    })
    it('1.b - Fail to create an user', done => {
      requester
        .post('/api/v1/users')
        .send({
          lastName: '',
          firstName: 'Bastien',
          pseudo: 'BastienGhetto',
          email: 'bb@gmail.com',
          password: 'azerty'
        })
        .then(res => {
          //* The user wasn't created
          res.should.have.status(500)
          User.find({}, (err, users) => {
            if (err) done(err)
            users.length.should.be.eql(1)
            done()
          })
        })
    })
  })
  /*
    * Test the /PATCH route
    !TODO EDIT AN USER'S DATA
  */

  describe('/Patch user', () => {
    let currentUser
    let token
    before(done => {
      // on créé un utilisateur
      currentUser = createUser()
      User.create(currentUser)
        .then(user => {
          currentUser.id = user.id
          requester
            .post('/api/v1/users/authenticate')
            .send({
              email: currentUser.email,
              password: currentUser.password
            })
            .then(res => {
              token = res.body.data.token
              done()
            })
        })
        .catch(err => done(err))
    })
    it('1.a - Modify the last name of an User', done => {
      requester
        .patch(`/api/v1/users/${currentUser.id}`)
        .set({
          'x-access-token': token
        })
        .send({
          lastName: 'Notorious'
        })
        .then(res => {
          //* the user was updated
          res.should.have.status(200)
          User.findById(currentUser.id).then(user => {
            user.lastName.should.be.eql('Notorious')
            done()
          })
        })
    })
    it('1.b - Modify the password of an User', done => {
      let pass = 'sisiLaFamille'
      requester
        .patch(`/api/v1/users/${currentUser.id}`)
        .set({
          'x-access-token': token
        })
        .send({
          password: pass
        })
        .then(res => {
          //* the user was updated
          res.should.have.status(200)
          User.findById(currentUser.id).then(user => {
            compareSync(pass, user.password).should.be.true
            // user.password.should.be.eql(hashSync(pass))
            done()
          })
        })
    })
  })
})
