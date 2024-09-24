import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";

const App = () => {
  return (
    <main>
      <h1>Syväsukellus moderniin websovelluskehitykseen</h1>
      <ul>
        <li>
          <a href="/osa1/a.html">Osa 1a Reactin alkeet, Tehtävät 1.1-1.5</a>
        </li>
        <li>
          <a href="/osa1/b.html">Osa 1b JavaScriptia</a>
        </li>
        <li>
          <a href="/osa1/c.html">Osa 1c Komponentin tila ja tapahtumankäsittely</a>
        </li>
        <li>
          <a href="/osa1/d.html">Osa 1d Monimutkaisempi tila, Reactin debuggaus, 1.6-1.14</a>
        </li>
      </ul>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
