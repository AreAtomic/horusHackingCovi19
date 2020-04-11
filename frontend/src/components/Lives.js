import React from "react";
import axios from "axios";

class Lives extends React.Component {
  constructor(props) {
    super();
    let lives = [];
    this.state = {
      lives: lives,
    };
    axios.get("http://localhost:5000/api/v1/lives").then(({ data }) => {
      lives = data.lives;
      console.log(data.lives);
      this.setState({
        lives: data.lives,
      });
    });
    console.log(this.state);
  }

  componentDidMount() {}

  disappear() {}

  render() {
    return (
      <div id="main">
        <div className="lives-grid">
          {this.state &&
            this.state.lives &&
            this.state.lives.map((l) => {
              return (
                <div className="card-live">
                  <div className="banner">
                    {" "}
                    <img src={l.channel.video_banner}></img>{" "}
                  </div>
                  <div className="logo pulse">
                    {" "}
                    <img src={l.channel.logo}></img>{" "}
                  </div>
                  <div className="name"> {l.channel.display_name} </div>
                  <div className="game">{l.channel.game}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Lives;
