import React, { useState } from "react";
import Routes from "./Routes/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/theme.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
