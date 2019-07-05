import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import NavBar from "./Navbar";
import Dashboard from "./Dashboard";
import Categories from "./Categories";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Route component={NavBar} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/:page/:page2" component={Dashboard} />
        <Route path="/categories" component={Categories} />
      </BrowserRouter>
    );
  }
}
export default App;
