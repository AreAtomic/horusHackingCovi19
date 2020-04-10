import express from 'express'
import { index, show, create, update } from '../app/controllers/chatbotsController'
import { dispatch } from '../app/controllers/Controller'
const router = express.Router()

/*
 * GET '/chatbots' => Return all chatbots
 */
router.get('/chatbots', dispatch(index))

/*
 * POST '/chatbots' => Create new chatbot
 */
router.post('/chatbots', dispatch(create))

/*
 * GET '/chatbots/:chatbotId' => Return the chatbot where id = :chatbotdId
 */
router.get('/chatbots/:chatbotId', dispatch(show))

/*
 * PATCH '/chatbots/:chatbotId' => Update chatbot's data where id = :chatbotId
 */
router.patch('/chatbots/:chatbotId', dispatch(update))

/*
 * DELETE '/chatbots/:chatbotId' => Delete the chatbot where id = :chatbotId
 * Not allowed by now.
 */
// router.delete('/chatbots/:chatbotId', chatbotController.delete)

export default router
