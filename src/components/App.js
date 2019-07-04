import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Register from "./Register"
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Navbar} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    );
  }
}
export default App;
