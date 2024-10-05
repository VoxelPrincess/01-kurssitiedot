import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
/* import Hello from "../components/Hello"; */

const App = () => {
  return (
    <main>
      <h1>Osa 1c Palvelimella olevan datan hakeminen</h1>

      <div className="theory">{/* <Hello counter={counter} /> */}</div>

      <h2>Tehtävät 2.6.-2.10.</h2>

      <div className="task">{/*  <Kurssitiedot />  */}</div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
