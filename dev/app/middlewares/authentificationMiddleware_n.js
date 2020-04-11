import { verify } from 'jsonwebtoken'
import User from '../models/user'
import { unauthorizedAccess, internalError } from './errorsMiddleware'

export async function authMiddleware (req, res, next) {
  verify(req.headers['x-auth-token'], req.app.get('secretKey'), (err, decoded) => {
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
