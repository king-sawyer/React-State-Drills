import React from "react";
// import Messages from "./Messages";
import TheDate from "./state/TheDate";
import Counter from "./Components/Counter";
import HelloWorld from "./drills/HellowWorld";
import RouletteGun from "./drills/RouletteGun";
import Bomb from "./drills/Bomb";

function App() {
  var bulletInChamber = 8;
  return (
    <main className="App">
      {/* <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} /> */}
      {/* <TheDate /> */}
      {/* <Counter count={123} /> */}

      {/*----Call for Hello World----*/}
      {/* <HelloWorld /> */}

      {/*----Call for Roulette Gun----*/}
      {/*<RouletteGun bulletInChamber={bulletInChamber} /> */}

      {/*----Call for Bomb----*/}
      {/* <Bomb count={0} /> */}
    </main>
  );
}

export default App;
