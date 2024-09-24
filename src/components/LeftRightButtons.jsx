import "./LeftRightButtons.css";
import React, { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = (props) => {
  console.log("Props value is", props);
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <section style={{ marginTop: "20px" }}>
      <h1 style={{ color: "darkblue" }}>
        <b>Left and Right Buttoms</b>
      </h1>
      <div>
        <div className="button-group">
          {left}
          <Button handleClick={handleLeftClick} text="left" />
          <Button handleClick={handleRightClick} text="right" />
          {right}
          <History allClicks={allClicks} />
        </div>
      </div>
    </section>
  );
};

export default App;
