import { verify } from 'jsonwebtoken'
import User from '../models/user'
import { unauthorizedAccess, internalError } from './errorsMiddleware'

//! Good comment on this
export async function authMiddleware (req, res, next) {
  verify(req.headers['x-access-token'], req.app.get('secretKey'), (err, decoded) => {
    if (err || typeof decoded === 'undefined') {
      unauthorizedAccess(res)
    }
    User.findById(decoded.id, (err, user) => {
      if (err) internalError(res)
      req.currentUser = user
      next()
    })
  })
}
