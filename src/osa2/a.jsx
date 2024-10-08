import "../index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Theory2a from "../components/Theory2a";
import Kurssit from "../tasks_2.1_2.5/Kurssit";
import { courses } from "../constants";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

const App = () => {
  return (
    <main>
      <h1>Osa 2a Kokoelmien renderöinti ja moduulit</h1>
      <div className="theory">
        <Theory2a notes={notes} />
      </div>

      <h2>Tehtävät 2.1-2.5</h2>

      <div className="task">
        <Kurssit courses={courses} />
      </div>
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
