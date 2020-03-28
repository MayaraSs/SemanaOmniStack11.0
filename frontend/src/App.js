import React, { useState } from "react";

import Header from "./Header";

function App() {
  //every time the component wants to store a level value it will use the state
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
