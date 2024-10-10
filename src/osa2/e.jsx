import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Phonebook from "../tasks_2.16_2.17/Phonebook";
import CountriesTask from "../tasks_2.18_2.20/CountriesTask";

const App = () => {
  return (
    <main>
      <h1>Osa 2e Tyylien lisääminen React-sovellukseen</h1>

      <h2>Tehtävät 2.16.-2.17.</h2>

      <div className="task">
        <Phonebook />
      </div>

      <h2>Tehtävät 2.18.-2.20.</h2>

      <div className="task">
        <CountriesTask />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
