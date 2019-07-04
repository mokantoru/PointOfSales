import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}
export default App;
