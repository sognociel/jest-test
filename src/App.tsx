import React from "react";
import "./App.css";

import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <h1>계산기</h1>
        <Calculator />
      </section>
    </div>
  );
}

export default App;
