import {
  Schema,
  model
} from 'mongoose'
import {
  checkServerIdentity
} from 'tls'
// Define a schema
export const POSSIBLES_STATES = ['Unreviewed', 'BetaDeclined', 'BetaValidated', 'Refused', 'Online', 'Hide']
/*
 * Schema to define a chatbot :
 * title : String, required
 * description : String, required
 * image_url : String
 * categories : [String] //! HAS TO BE REQUIRED
 * price : int, default = 0
 * betaReview : String, required
 * comments : [String]
 * state : POSSIBLE_STATES
 * promoted : Boolean, default = false
 * chatbot_test_url : String, required
 * author : ObjectID, ref User
 * created_on : Date, default = now
 * chatbot_file : String, required
 */
const ChatbotSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'The title cannot be blank.']
  },
  description: {
    type: String,
    required: [true, 'The description cannot be blank.']
  },
  image_url: {
    type: String,
    required: false,
    default: 'public/images/chatbot.png'
  },
  categories: {
    //! TODO CATEGORIES HAS TO BE REQUIRED
    type: Schema.Types.Array,
    required: false,
    default: []
  },
  langs: {
    type: Schema.Types.Array,
    required: [true, 'You have to choose at least one language']
  },
  price: {
    type: Schema.Types.Number,
    required: false,
    default: 0
  },
  betaReview: {
    type: String,
    required: false
  },
  comments: {
    type: Schema.Types.Array,
    required: false,
    default: []
  },
  state: {
    type: String,
    enum: POSSIBLES_STATES,
    default: POSSIBLES_STATES[0]
  },
  promoted: {
    type: Boolean,
    required: false,
    default: false
  },
  chatbot_test_url: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_on: {
    type: Date,
    trim: true,
    required: false,
    default: Date.now()
  },
  chatbot_file: {
    type: String,
    required: [true, 'You can not upload a chatbot without its file.']
  }
})
const Chatbot = model('Chatbot', ChatbotSchema)
export default Chatbot
