import userModel from '../models/user'
import bcrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
import { badCredential, internalError } from '../middlewares/errorsMiddleware'
import { sendJson } from '../middlewares/successMiddleware'
import { authMiddleware } from '../middlewares/authentificationMiddleware'
import { hashSync } from 'bcrypt-nodejs'

/*
 * User.create
 *   Create a user and return it.
 */
export async function create (req, res, next) {
  userModel.create({ ...req.body }, function (err, result) {
    if (err) internalError(res)
    // !Todo : Formalise all the messages
    else res.json({ status: 'success', data: result })
  })
}

/*
 * User.authenticate
 *   If the user send correct credential, send him a JSON Web Token.
 */
export const authenticate = (req, res, next) => {
  userModel.findOne({ email: req.body.email }, (databaseError, databaseResponse) => {
    if (databaseError) internalError(res)
    else if (databaseResponse == null) badCredential(res)
    else {
      const user = databaseResponse
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ id: user._id }, req.app.get('secretKey'), { expiresIn: '10h' })
        sendJson(res, { user: user, token: token })
      } else badCredential(res)
    }
  })
}

/*
 * User.update
 *   Before : AuthMiddleware, verify that the user has a correct token.
 *   Update the current user and return it.
 */
update.before = [authMiddleware]
export async function update (req, res, next) {
  req.body.password = hashSync(req.body.password)
  userModel
    .findByIdAndUpdate(req.params.id, { ...req.body }, { new: true, runValidators: true })
    .then(user => {
      sendJson(res, user)
    })
    .catch(err => internalError(res))
}

/*
 * User.show
 *   Before : AuthMiddleware, verify that the user has a correct token.
 *   Return the current user details.
 */
show.before = [authMiddleware]
export async function show (req, res, next) {
  // ! TODO
  res.json({ user: req.currentUser })
}

/*
* User.logout
*   Before : AuthMiddleware, verify that the user has a correct token.
!   TODO destroy the current user token
*/
logout.before = [authMiddleware]
export async function logout (req, res, next) {
  console.log('Méthode du controller')
  next()
  // ! TODO
}
