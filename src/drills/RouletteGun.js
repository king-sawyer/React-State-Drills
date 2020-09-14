import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      div: "Try your luck at playing Russian-Roulette!",
    };
  }

  clickEvent() {
    console.log("Puuuuush!");
    this.setState({
      spinningTheChamber: true,
      div: "Spinning the chamber and pulling the trigger!",
    });
    this.interval = setTimeout(() => {
      let rand = Math.floor(Math.random() * 9);
      if (rand === this.props.bulletInChamber) {
        console.log("Numbers match!");
        this.setState({
          div: "BANG!!!!!",
        });
      } else {
        console.log("Numbers dont match!");
        console.log(this.props.bulletInChamber, rand);
        this.setState({
          div: "You're safe!",
        });
      }
      this.setState({
        spinningTheChamber: false,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <p>{this.state.div}</p>
        <button onClick={() => this.clickEvent()}>Pull the Trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
