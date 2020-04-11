import {
  createUser,
  getChatbotsExamples
} from "../test/helpers/generatorHelper";
import User from "../app/models/user";
import Chatbot from "../app/models/chatbot";
import Live from "../app/models/live";
/*
 *   Seeding
 *       0) emptying the DB.
 *       1) create Admin user.
 *       2) create x chatbots.
 */
const seed = () => {
  //* 0) Emptying the DB
  User.deleteMany({}).then(res => {});
  Chatbot.deleteMany({}).then(res => {});
  Live.deleteMany({}).then(res => {});
  //* 1) Admin user
  const user = createUser();
  user.email = "admin@email.com";
  user.password = "password";
  User.create(user)
    .then(user => {
      let id = user.id;
      const chatbots = getChatbotsExamples(20, id);
      //* 2) Chatbots
      Chatbot.insertMany(chatbots)
        .then(res => {})
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
};

export default seed;
