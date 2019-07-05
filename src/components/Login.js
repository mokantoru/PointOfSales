import React from "react";
import { Link } from "react-router-dom"

import "../css/login.css"

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="divlogin">
          <h1>sign in</h1>
          <form>
            <input className="inputlogin" type="text" placeholder="email or phone number" />
            <input className="inputlogin" type="text" placeholder="password" />
          </form>
          <div className="divlogin2">
            <Link className="linklogin" to="login">Forgot password?</Link>
          </div>
          <button className="buttonlogin">sign in</button>
          <div>
            <p className="plogin">Don’t have a mokantoru account? <Link className="linklogin" to="/register">Sign up</Link></p>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
