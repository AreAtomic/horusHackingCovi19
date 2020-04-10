import { hashSync } from 'bcrypt-nodejs'
import { Schema, model } from 'mongoose'

/*
 * Schema to define an user :
 * lastName : String, required
 * firstName : String, required
 * pseudo : String, required
 * email : String, required
 * image_url : String
 * password : String, required
 * admin : Boolean
 * tester : Boolean
 */
const UserSchema = new Schema({
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Lastname cannot be blank.']
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, 'Firstname cannot be blank.']
  },
  pseudo: {
    type: String,
    trim: true,
    required: [true, 'Pseudo cannot be blank.']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email cannot be blank.']
  },
  image_url: {
    type: String,
    required: false,
    default: 'public/images/user.png'
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password cannot be blank.']
  },
  admin: {
    type: Boolean,
    required: false,
    default: false
  },
  tester: {
    type: Boolean,
    required: false,
    default: false
  }
})

//* encrypt the password given by the user before persisting it into the DB
UserSchema.pre('save', function (next) {
  this.password = hashSync(this.password)
  next()
})

const User = model('User', UserSchema)

export default User
