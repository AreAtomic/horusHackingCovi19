import React from "react";

class WaveLoader extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {}

  disappear() {}

  render() {
    return (
      <div class={"wave-wrapper " + this.props.className}>
        <div class="wave-container">
          <div class="wave-loader"></div>
        </div>
      </div>
    );
  }
}

export default WaveLoader;
