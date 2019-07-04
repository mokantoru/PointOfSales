import React from "react"
import { Link } from "react-router-dom"

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <h1>ini sidebar</h1>
        <div>
          <ul>
            <li>
              <Link to="/dashboard/dashboard">
                dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/teammanagement">
                team management
              </Link>
            </li>
            <li>
              <Link to="/dashboard/sales">
                sales
              </Link>
            </li>
            <li>
              <Link to="/dashboard/report">
                report
              </Link>
            </li>
            <li>
              <Link to="/dashboard/">
                sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default SideBar