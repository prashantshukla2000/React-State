import React from "react";

var isDone = false;

function strike() {
  document.getElementById("root").style.textDecoration="line-through";//Imperative
}

function unStrike() {
  isDone = false; //Declarative...does not work need Hooks
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
