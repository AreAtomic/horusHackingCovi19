import server from '../server'
import chai from 'chai'
import Chatbot from '../app/models/chatbot'
import chaiHttp from 'chai-http'
import {
  createUser,
  createChatbot
} from './helpers/generatorHelper'
import User from '../app/models/user'
//! Todo : remove debug function
import {
  d
} from './helpers/loggerHelper'

chai.use(chaiHttp)
chai.should()
const requester = chai.request(server).keepOpen()

describe('[MODEL] Chatbot', function () {
  this.timeout(20000)
  beforeEach(done => {
    // Before each test we empty the database
    Chatbot.deleteMany({}, err => {
      if (err) done(err)
      done()
    })
  })

  /*
   * Test the /GET route
   */
  describe('/GET chatbots', function () {
    it('should GET all the chatbots.', done => {
      requester
        .get('/api/v1/chatbots')
        .end((err, res) => {
          if (err) done(err)
          res = res.body
          res.should.have.status('success')
          res.data.chatbots.should.be.a('array')
          res.data.chatbots.length.should.be.eql(0)
          done()
        })
    })
  })

  /*
   * Test d'ajout de chatbot
   * 1 - Avec de mauvais paramètres
   *     a) Sans un titre
   *     b) Avec un prix String
   *     c) Un état non-existant
   * 2 - Avec de bons paramètres
   */
  describe('/POST Chatbot', function () {
    let currentUser
    let token
    before(done => {
      //* First we have to delete all the users
      User.deleteMany({}, err => {
        if (err) done(err)
      }).then(() => {
        //* Next we create an user & get a valid token
        currentUser = createUser()
        User.create(currentUser).then(user => {
          currentUser.id = user.id
          requester
            .post('/api/v1/users/authenticate')
            .send({
              email: currentUser.email,
              password: currentUser.password
            })
            .then(res => {
              res.should.have.status(200)
              token = res.body.data.token
              done()
            })
            .catch(err => done(err))
        })
      })
    })

    it('1.a - Should fail to add a chatbot without title.', done => {
      requester
        .post('/api/v1/chatbots')
        .set({
          'x-access-token': token
        })
        .send({
          author: currentUser.id,
          chatbot_test_url: 'url',
          description: 'descr',
          title: '',
          langs: [],
          chatbot_file: 'url'
        })
        .then(res => {
          //* The error has to come from an Internal (and not from auth, permission...)
          res.should.have.status(500)
          //* We are looking after all chatbots
          Chatbot.find({}, (err, chatbots) => {
            if (err) done(err)
            //* Chatbots.length should return 0
            chatbots.length.should.be.eql(0)
            done()
          })
        })
        .catch(err => done(err))
    })
    it('1.b - Should fail to create a chatbot with a bad price.', done => {
      requester
        .post('/api/v1/chatbots')
        .set({
          'x-access-token': token
        })
        .send({
          author: currentUser.id,
          chatbot_test_url: 'url',
          description: 'descr',
          title: 'String price',
          langs: [],
          price: 'deux euros',
          chatbot_file: 'url'
        })
        .then(res => {
          //* The error has to come from an Internal (and not from auth, permission...)
          res.should.have.status(500)
          Chatbot.find({}, (err, chatbots) => {
            if (err) done(err)
            chatbots.length.should.be.eql(0)
            done()
          })
        })
        .catch(err => done(err))
    })
    it('1.c - Should refuse a chatbot with state given not in the possible cases.', done => {
      requester
        .post('/api/v1/chatbots')
        .set({
          'x-access-token': token
        })
        .send({
          author: currentUser.id,
          chatbot_test_url: 'url',
          description: 'descr',
          title: 'Wrong state',
          langs: [],
          state: 'gre',
          chatbot_file: 'url'
        })
        .then(res => {
          //* The error has to come from an Internal (and not from auth, permission...)
          res.should.have.status(500)
          done()
        })
        .catch(err => done(err))
    })
    it('2 - Should create a chatbot with the good params.', done => {
      requester
        .post('/api/v1/chatbots')
        .set({
          'x-access-token': token
        })
        .send({
          description: 'Un super chatbot',
          chatbot_test_url: 'Un super url',
          author: currentUser.id,
          title: 'Un bon chatbot',
          langs: [],
          chatbot_file: 'url'
        })
        .then(res => {
          res.should.have.status(200)
          //* we are looking for our chatbot in the db
          Chatbot.findOne({
            title: 'Un bon chatbot'
          }, (err, chatbot) => {
            if (err) done(err)
            //* If the chatbot is created and found, it state should be Unreviewed
            chatbot.state.should.be.eql('Unreviewed')
            done()
          })
        })
        .catch(err => done(err))
    })
  })

  /*
   * Test de modification de chatbot
   */
  describe('/PATCH Chatbot', function () {
    let currentUser
    let token

    before(done => {
      //* First we have to delete all the users
      User.deleteMany({}, err => {
        if (err) done(err)
      }).then(() => {
        //* Next we create an user & get a valid token
        currentUser = createUser()
        User.create(currentUser).then(user => {
          currentUser.id = user.id
          requester
            .post('/api/v1/users/authenticate')
            .send({
              email: currentUser.email,
              password: currentUser.password
            })
            .then(res => {
              res.should.have.status(200)
              token = res.body.data.token
              done()
            })
            .catch(err => done(err))
        })
      })
    })

    it('1.a - Should update a chatbot', done => {
      let chatbot = createChatbot()
      chatbot.author = currentUser.id
      Chatbot.create(chatbot)
        .then(chatbotCreated => {
          chatbot.id = chatbotCreated.id
          let modify = {
            title: 'My new super title'
          }
          //* First we try to update the chatbot
          requester
            .patch(`/api/v1/chatbots/${chatbot.id}`)
            .set({
              'x-access-token': token
            })
            .send(modify)
            .then(() => {
              //* Now, we check that the chatbot has been updated
              Chatbot.findById(chatbot.id)
                .then(chatbot => {
                  chatbot.title.should.be.eql('My new super title')
                  done()
                })
                .catch(err => done(err))
            })
            .catch(err => done(err))
        })
        .catch(err => done(err))
    })
    it('1.b - Should update a chatbot', done => {
      let chatbot = createChatbot()
      chatbot.author = currentUser.id
      Chatbot.create(chatbot)
        .then(chatbotCreated => {
          chatbot.id = chatbotCreated.id
          let modify = {
            state: 'BetaDeclined'
          }
          //* First we try to update the chatbot
          requester
            .patch(`/api/v1/chatbots/${chatbot.id}`)
            .set({
              'x-access-token': token
            })
            .send(modify)
            .then(() => {
              //* Now, we check that the chatbot has been updated
              Chatbot.findById(chatbot.id)
                .then(chatbot => {
                  chatbot.state.should.be.eql('BetaDeclined')
                  done()
                })
                .catch(err => done(err))
            })
            .catch(err => done(err))
        })
        .catch(err => done(err))
    })
    it('2.a - Should not update a chatbot with string price', done => {
      let chatbot = createChatbot()
      chatbot.author = currentUser.id
      chatbot.price = 4
      Chatbot.create(chatbot)
        .then(chatbotCreated => {
          chatbot.id = chatbotCreated.id
          let modify = {
            price: 'deux euros'
          }
          //* First we try to update the chatbot
          requester
            .patch(`/api/v1/chatbots/${chatbot.id}`)
            .set({
              'x-access-token': token
            })
            .send(modify)
            .then(() => {
              //* Now, we check that the chatbot has not been updated
              Chatbot.findById(chatbot.id)
                .then(chatbot => {
                  chatbot.price.should.be.eql(4)
                  done()
                })
                .catch(err => done(err))
            })
            .catch(err => done(err))
        })
        .catch(err => done(err))
    })
    it('2.b - Should not update a chatbot with wrong state', done => {
      let chatbot = createChatbot()
      chatbot.author = currentUser.id
      Chatbot.create(chatbot)
        .then(chatbotCreated => {
          chatbot.id = chatbotCreated.id
          let modify = {
            state: 'Wrong'
          }
          //* First we try to update the chatbot
          requester
            .patch(`/api/v1/chatbots/${chatbot.id}`)
            .set({
              'x-access-token': token
            })
            .send(modify)
            .then(() => {
              //* Now, we check that the chatbot has been updated
              Chatbot.findById(chatbot.id)
                .then(chatbot => {
                  chatbot.state.should.be.eql('Unreviewed')
                  done()
                })
                .catch(err => done(err))
            })
            .catch(err => done(err))
        })
        .catch(err => done(err))
    })
  })
})
