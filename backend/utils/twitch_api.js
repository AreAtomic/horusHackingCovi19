const axios = require("axios");
import Live from "../app/models/live";

function get_streams(timeout = 100000) {
  console.log("start scrapping");

  axios({
    method: "get",
    url: "https://api.twitch.tv/kraken/streams/?language=fr",
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      "Client-ID": "ufqh8u67gc9u1ny6me1rpvygdjkzza"
    }
  })
    .then(res => {
      let result = res.data;
      result.streams.map(({ _id, ...live }) => {
        live["id"] = _id;
        Live.update({ id: _id }, { ...live }, { upsert: true })
          .then(res => {})
          .catch(err => console.log(err));
      });
    })
    .catch(err => console.log(err));
}

module.exports = get_streams;
