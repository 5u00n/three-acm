import React, { useState } from "react";
import Routes from "./Routes/index";


function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
