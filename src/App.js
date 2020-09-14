import React from "react";
// import Messages from "./Messages";
import TheDate from "./state/TheDate";
import Counter from "./Components/Counter";
import HelloWorld from "./drills/HellowWorld";
import RouletteGun from "./drills/RouletteGun";
import Bomb from "./drills/Bomb";
import Tabs from "./Components/Tabs";
import Accordion from "./drills/Accordion";

function App() {
  // var bulletInChamber = 8;

  const tabsProp = [
    {
      name: "First tab",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
    },
    {
      name: "Second tab",
      content:
        "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Third tab",
      content:
        "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
    },
  ];

  const sections = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Section 2",
      content:
        "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
    },
    {
      title: "Section 3",
      content:
        "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
    },
  ];

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

      {/* <Tabs tabs={tabsProp} /> */}

      <Accordion sections={sections} />
    </main>
  );
}

export default App;
