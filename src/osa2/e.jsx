import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Phonebook from "../tasks_2.16_2.17/Phonebook";

const App = () => {
  return (
    <main>
      <h1>Osa 2e Tyylien lisääminen React-sovellukseen</h1>

      <div className="theory">{/* <LeftRightButtons /> */}</div>

      <h2>Tehtävät 2.16.-2.17.</h2>

      <div className="task">
        <Phonebook />
      </div>

      <h2>Tehtävät 2.18.-2.20.</h2>

      <div className="task"></div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
