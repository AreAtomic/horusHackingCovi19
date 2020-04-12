import React from "react";
import axios from "axios";
import Nav from "./Navbar"
import Slider from 'infinite-react-carousel';


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
    const settings =  {
      duration: 100,
      slidesToShow: 3,
      virtualList: true
    };
    return (
      <div id="main">
        <Nav/>
        <h2>Pour toi</h2>
        <div className='lives-grid'>
          {this.state &&
              this.state.lives &&
              this.state.lives.map((l) => {
                if(l.channel.game == 'VALORANT'){
                return (
                  <a href={'http://twitch.tv/'+l.channel.name} target='_blank'><div className="card-live">
                    <div className="banner">
                      {" "}
                      <img src={l.channel.video_banner}></img>{" "}
                    </div>
                    <div className="day">
                      {l.created_at.substring(0,10)}
                    </div>
                    <div className="hour">
                      {l.created_at.substring(11,13)} h
                      {l.url}
                    </div>
                    <div className="logo pulse">
                      {" "}
                      <img src={l.channel.logo}></img>{" "}
                    </div>
                    <div className="name"> {l.channel.display_name} </div>
                    <div className="game">{l.channel.game}</div>
                  </div></a>
                );
                }
              }
            )}
          </div>
          <h2>Aujourd'hui</h2>
        <div className="lives-grid">
          {this.state &&
            this.state.lives &&
            this.state.lives.map((l) => {
              return (
                <a href={'http://twitch.tv/'+l.channel.name} target='_blank'><div className="card-live">
                  <div className="banner">
                    {" "}
                    <img src={l.channel.video_banner}></img>{" "}
                  </div>
                  <div className="day">
                    {l.created_at.substring(0,10)}
                  </div>
                  <div className="hour">
                    {l.created_at.substring(11,13)} h
                    {l.url}
                  </div>
                  <div className="logo pulse">
                    {" "}
                    <img src={l.channel.logo}></img>{" "}
                  </div>
                  <div className="name"> {l.channel.display_name} </div>
                  <div className="game">{l.channel.game}</div>
                </div></a>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Lives;
