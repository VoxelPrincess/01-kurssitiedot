import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Theory2d from "../components/Theory2d";
import Phonebook from "../tasks_2.12_2.15/Phonebook";

const App = () => {
  return (
    <main>
      <h1>Osa 2d Palvelimella olevan datan muokkaaminen</h1>

      <div className="theory">
        <Theory2d />
      </div>

      <h2>Tehtävät 2.12.-2.15.</h2>

      <div className="task">
        <Phonebook />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
