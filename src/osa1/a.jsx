import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Kurssitiedot from "../components/kurssitiedot/Kurssitiedot";

const App = () => {
  return (
    <main>
      <h1>Osa 1a Reactin alkeet</h1>

      <h2>Tehtävät 1.1-1.5</h2>

      <div className="task">
        <Kurssitiedot />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
