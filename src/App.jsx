import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("Button CLicked");
  }
  const handleClick2 = () => {
    alert("Button 2 Clicked");
  };
  const addToFive = (number) => alert(number + 5);
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert("Button 3 Clicked")}>Click 3</button>
      <button onClick={() => addToFive(5)}>Click 4</button>{" "}
      {/* When Parameter exist */}
    </>
  );
}

export default App;
