import express from "express";
import cors from "cors";
import logger from "morgan";
import routers from "./routes/index";
import bodyParser from "body-parser";
import mongoose from "./config/database"; // database configuration
import seeding from "./config/seeding";
import get_stream from "./utils/twitch_api";

const isDevEnv = process.env.NODE_ENVIRONMENT === "DEVELOPMENT";

/*
 * Setup server config
 */
const app = express();
const port = process.env.PORT || 5000;
app.set("secretKey", "chatbotApplication2018@ISIS.4A"); // jwt secret token

//* Parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/*
 * Connection to database
 */
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
if (isDevEnv) app.use(logger("dev"));

/*
 * Load server routes
 */
app.get("/", function(req, res) {
  res.json({ version: "1.0.0" });
});
app.get("/seed", function(req, res) {
  seeding();
  res.json({ msg: "Done." });
});

routers.map(router => app.use("/api/v1", router));

const server = app.listen(port, function() {
  console.log("Node server listening on port " + port);
});

// start scrapping for lives
get_stream();
setInterval(get_stream, 300000);

/* Priority serve any static files */
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

app.get("/api/send_email", function(req, res) {
  res.set("Content-Type", "application/json");

  /* Send email here */

  res.send('{"message":"Email sent."}');
});

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});

export default server;
