import React from "react";
import axios from "axios";
import WaveLoader from "./WaveLoader";
import Explorer from "./Explorer";
import Logo from "./Logo";
import menu from "../img/open-menu.svg";

class Lives extends React.Component {
  constructor(props) {
    super();
    this.default_banner =
      "https://blog.twitch.tv/assets/uploads/generic-email-header-1.jpg";
    let lives = [];
    this.state = {
      lives: lives,
      loaded: -1,
      search_value: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/lives").then(({ data }) => {
      this.setState({
        lives: data.lives,
        loaded: 0,
      });
      setTimeout(() => {
        this.setState({
          loaded: 1,
        });
      }, 2000);
    });
  }

  handle_search(event) {
    this.setState({ search_value: event.target.value });
  }

  get_stream() {
    if (this.state.search_value != "") {
      return this.state.lives;
    } else {
      return this.state.lives;
    }
  }

  render() {
    return (
      <div id="main">
        <div className="navbar-wrapper">
          <Logo />
          <div className="navbar-container">
            <div className="filter-container">
              <img className="burger" src={menu}></img>
            </div>
            <div className="search-container">
              <input
                className="search_input"
                type="text"
                placeholder="Recherche"
                value={this.state.search_value}
                onChange={this.handle_search}
              ></input>
            </div>
          </div>
        </div>
        <Explorer />
        {this.state.loaded < 1 && (
          <WaveLoader className={this.state.loaded === 0 ? " out " : " "} />
        )}
        <div
          className={
            " lives-grid " + (this.state.loaded === 1 ? " loaded " : " hidden ")
          }
        >
          {this.state &&
            this.state.lives &&
            this.state.lives.map((l) => {
              return (
                <div className="live-element">
                  <a
                    key={l._id}
                    href={"http://twitch.tv/" + l.channel.name}
                    target="_blank"
                  >
                    <div className="card-live">
                      <div className="banner">
                        {" "}
                        <img
                          alt="banner"
                          src={
                            l.channel.video_banner
                              ? l.channel.video_banner
                              : this.default_banner
                          }
                        ></img>{" "}
                      </div>
                      <div className="logo pulse">
                        {" "}
                        <img alt="logo" src={l.channel.logo}></img>{" "}
                      </div>
                      <div className="infos">
                        <div className="name"> {l.channel.display_name} </div>
                        <div className="game">{l.channel.game}</div>
                        <div className="hour">
                          {l.created_at.substring(11, 13)} h{l.url}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Lives;
