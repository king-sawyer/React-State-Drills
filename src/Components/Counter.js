import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("props in consctuctor", props);
    super(props);
    this.state = { count: 0 };
  }

  increaseCount() {
    console.log("props in increaseCount", this.props);
    console.log("state in increaseCount", this.state);
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
    console.log(newCount);
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={() => this.increaseCount()}>Add 1</button>
      </div>
    );
  }
}

export default Counter;
