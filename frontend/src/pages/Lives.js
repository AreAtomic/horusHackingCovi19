import React from "react";
import axios from "axios";

class Lives extends React.Component {
  constructor(props) {
    super();
    let lives = axios.get("http://localhost:5000/lives").then(({ lives }) => {
      console.log(lives);
    });
  }

  componentDidMount() {}

  disappear() {}

  render() {
    return <div id="main"></div>;
  }
}

export default Lives;
