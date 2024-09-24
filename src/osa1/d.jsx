import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import LeftRightButtons from "../components/LeftRightButtons";
import Anecdote from "../components/Anecdote";
import EventDemo from "../components/EventDemo";
import Unicafe from "../components/Unicafe";

const App = () => {
  return (
    <main>
      <h1>Osa 1d Monimutkaisempi tila, Reactin debuggaus</h1>

      <div className="theory">
        <LeftRightButtons />
      </div>

      <div className="theory">
        <EventDemo />
      </div>

      <h2>Tehtävät 1.6.-1.11.</h2>

      <div className="task">
        <Unicafe />
      </div>

      <h2>Tehtävät 1.12.-1.14.</h2>

      <div className="task">
        <Anecdote />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
