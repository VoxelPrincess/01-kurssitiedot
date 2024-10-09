import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Theory2c from "../components/Theory2c";
import Phonebook from "../tasks_2.11/Phonebook";
/* import Hello from "../components/Hello"; */

const App = () => {
  return (
    <main>
      <h1>Osa 2c Palvelimella olevan datan hakeminen</h1>

      <div className="theory">
        <Theory2c />
      </div>

      <h2>Tehtävät 2.11.</h2>

      <div className="task">
        <Phonebook />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
