import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      Weather app
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/eknox22/" target="_blank" rel="noreferrer">
          {" "}
          Emily Knox-Clifton
        </a>
        {""} and is {""}
        <a
          href="https://github.com/eknox22/React-Weather-Application"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}
