import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import ArtoComponent from "../components/ArtoComponent";

const App = () => {
  return (
    <main>
      <h1>Osa 1b JavaScriptia</h1>

      <div className="theory">
        <ArtoComponent />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
