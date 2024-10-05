import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";

const App = () => {
  return (
    <main>
      <h1>Osa 2d Palvelimella olevan datan muokkaaminen</h1>

      <div className="theory">{/* < /> */}</div>

      <div className="theory">{/* < /> */}</div>

      <h2>Tehtävät 2.12.-2.15.</h2>

      <div className="task">
        <Unicafe />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
