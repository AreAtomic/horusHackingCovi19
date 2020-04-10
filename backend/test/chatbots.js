import { server } from '../server'
const Chatbot = require('../app/models/chatbot')

// Require the dev-dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

chai.use(chaiHttp)

describe('Chatbot', () => {
  beforeEach(done => {
    // Before each test we empty the database
    Chatbot.remove({}, err => {
      if (err) done(err)
      else done()
    })
  })

  /*
     * Test the /GET route
     */
  describe('/GET users', () => {
    it('it should GET all the chatbot', done => {
      chai.request(server)
        .get('/chatbot')
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
})
