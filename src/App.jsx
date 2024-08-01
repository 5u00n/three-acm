import React, { useState } from "react";
import Routes from "./Routes/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Routes />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Count: {count}</p>
    </React.Fragment>
  );
}

export default App;
