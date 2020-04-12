import express from 'express'
import { create, authenticate, update, show, logout } from '../app/controllers/usersController'
import { dispatch } from '../app/controllers/Controller'

const router = express.Router()

/*
 * POST '/users' => create new user and return it
 *  @property {email} : String
 *  @property {password} : String
 *  @property {lastName}? : String
 *  @property {firstName}? : String
 *  @property {pseudo}? : String
 *  @property {image}? : File
 *
 */
router.post('/users', dispatch(create))

/*
 * POST '/users/authenticate' verify the users and return a token
 *  @Type Object
 *      @property email : String
 *      @property password : String
 */
router.post('/users/authenticate', dispatch(authenticate))

/*
* PATCH '/users/me' => Update user's data
! TODO comment this...
*/
router.patch('/users/:id', dispatch(update))

/*
* GET '/users/me' => Return user's data
! TODO Create show method
*/
router.get('/users/me', dispatch(show))

/*
* GET '/users/logout' => Logout the user
! TODO Create logout method
*/
router.get('/users/logout', dispatch(logout))



router.get()

export default router
