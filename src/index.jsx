import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";

const App = () => {
  return (
    <main>
      <h1>Syväsukellus moderniin websovelluskehitykseen</h1>
      <ul>
        <li>
          <a href="./osa1/a.html">Osa 1a Reactin alkeet, Tehtävät 1.1-1.5</a>
          {/* Basics of React */}
        </li>
        <li>
          <a href="./osa1/b.html">Osa 1b JavaScriptia</a>
        </li>
        <li>
          <a href="./osa1/c.html">Osa 1c Komponentin tila ja tapahtumankäsittely</a>
          {/* Component state and event handling */}
        </li>
        <li>
          <a href="./osa1/d.html">Osa 1d Monimutkaisempi tila, Reactin debuggaus, 1.6-1.14</a>
          {/* A more complex state */}
        </li>
        <li>
          <a href="./osa2/a.html">Osa 2a Kokoelmien renderöinti ja moduulit, Tehtävät 2.1.-2.5</a>
        </li>
        {/* Rendering collection and module */}
        <li>
          <a href="./osa2/b.html">Osa 2b Lomakkeiden käsittely, Tehtävät 2.6.-2.10</a>
          {/* Processing of forms */}
        </li>
        <li>
          <a href="./osa2/c.html">Osa 2c Palvelimella olevan datan hakeminen, Tehtävä 2.11</a>
          {/* Retrieving the data on the server */}
        </li>
        <li>
          <a href="./osa2/d.html">Osa 2d Palvelimella olevan datan muokkaaminen, Tehtävät 2.12.-2.15</a>
        </li>
        {/* Editing data on the server */}
        <li>
          <a href="./osa2/e.html">
            Osa 2e Tyylien lisääminen React-sovellukseen, Tehtävät 2.16.-2.17, Tehtävät 2.18.-2.20
          </a>
          {/* Adding styles to a React application */}
        </li>
      </ul>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
