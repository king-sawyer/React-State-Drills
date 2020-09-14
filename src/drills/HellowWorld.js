import React from "react";
import { render } from "@testing-library/react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "World",
    };
  }

  updateWorld() {
    console.log("World");
    let newWord = "World";
    this.setState({
      who: newWord,
    });
  }
  updateReact() {
    console.log("React");
    let newWord = "React";
    this.setState({
      who: newWord,
    });
  }
  updateFriend() {
    console.log("Friend");
    let newWord = "Friend";
    this.setState({
      who: newWord,
    });
  }

  render() {
    return (
      <div>
        <p> Hello, {this.state.who}</p>
        <button onClick={() => this.updateWorld()}>World</button>
        <button onClick={() => this.updateFriend()}>Friend</button>
        <button onClick={() => this.updateReact()}>React</button>
      </div>
    );
  }
}
export default HelloWorld;
