import chatbotModel from '../models/chatbot'
import { authMiddleware } from '../middlewares/authentificationMiddleware'
import { internalError } from '../middlewares/errorsMiddleware'
import { sendJson } from '../middlewares/successMiddleware'

/*
* Chatbot.create
*   Before : AuthMiddleware, verify that the user has a correct token.
!   TODO response elegant
*/
create.before = [authMiddleware]
export function create (req, res, next) {
  chatbotModel
    .create({ ...req.body })
    .then(chatbot => {
      sendJson(res, chatbot)
    })
    .catch(() => internalError(res))
}

/*
* Chatbot.index
!   TODO
*/
export async function index (req, res, next) {
  let chatbotsList = []
  chatbotModel.find({}, function (err, chatbots) {
    if (err) internalError(res)
    for (let chatbot of chatbots) {
      chatbotsList.push({ ...chatbot })
    }
    sendJson(res, { chatbots: chatbotsList })
  })
}

/*
* Chatbot.show
!   TODO
*/
export async function show (req, res, next) {
  chatbotModel.findById(req.params.chatbotId, function (err, chatbot) {
    if (err) internalError(res)
    res.json({ status: 'success', message: 'Chatbot found!!!', data: { movies: chatbot } })
  })
}

/*
* Chatbot.update
*   Before : AuthMiddleware, verify that the user has a correct token.
!   TODO
*/
update.before = [authMiddleware]
export async function update (req, res, next) {
  chatbotModel
    .findByIdAndUpdate(req.params.chatbotId, { ...req.body }, { new: true, runValidators: true })
    .then(chatbot => {
      sendJson(res, chatbot)
    })
    .catch(err => internalError(res))
}

/*
* Chatbot.destroy
*   Before : AuthMiddleware, verify that the user has a correct token.
!   TODO
*/
destroy.before = [authMiddleware]
export async function destroy (req, res, next) {
  chatbotModel.findByIdAndRemove(req.params.movieId, function (err, chatbot) {
    if (err) internalError(res)
    res.json({ status: 'success', message: 'chatbot deleted successfully!!!', data: null })
  })
}
