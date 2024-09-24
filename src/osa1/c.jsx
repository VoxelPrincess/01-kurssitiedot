import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Hello from "../components/Hello";

let counter = 1;

const App = () => {
  return (
    <main>
      <h1>Osa 1c Komponentin tila ja tapahtumankäsittely</h1>

      <div className="theory">
        <Hello counter={counter} />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
