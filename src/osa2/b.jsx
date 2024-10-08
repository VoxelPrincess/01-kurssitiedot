import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Phonebook from "../tasks_2.6_2.10/Phonebook";
/* import ArtoComponent from "../components/ArtoComponent"; */

const App = () => {
  return (
    <main>
      <h1>Osa 2b Lomakkeiden käsittely</h1>
      <div className="theory">{/* < /> */}</div>

      <div className="theory">{/* <ArtoComponent /> */}</div>

      <h2>Tehtävät 2.6.-2.10.</h2>

      <div className="task">
        <Phonebook />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
