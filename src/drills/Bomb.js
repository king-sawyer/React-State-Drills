import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "tock",
      count: 0,
    };
  }

  componentDidMount() {
    let interval = setInterval(() => {
      this.state.count++;
      if (this.state.count % 2 === 0 && this.state.count != 8) {
        this.setState({
          display: "tick",
        });
      } else if (this.state.count === 8) {
        this.setState({
          display: "BOOM!!!!",
        });
      } else {
        this.setState({
          display: "tock",
        });
      }
      if (this.state.count > 8) {
        clearInterval(interval);
        this.setState({
          display: "BOOM!!!!",
        });
      }
    }, 1000);
  }

  render() {
    return <div>{this.state.display}</div>;
  }
}

export default Bomb;
