import React from "react"

import SideBar from "./Sidebar";
import TableManage from "./TableManage";
import Sale from "./Sale";

import '../css/dashboard.css'
import Capital from "./Capital";

class Dashboard extends React.Component {
  renderSidebar = () => {
    const { page, page2 } = this.props.match.params
    if (page === "tablemanagement") {
      if (page2 === "apps") {
        return <TableManage />
      } else if (page2 === "capital") {
        return <Capital />
      }
    }
    if (page === "sales") {
      return <Sale />
    }
  }
  render() {
    return (
      <div className="d-flex">
        <div className="divcol-2 col-2">
          <SideBar page={this.props.match.params.page} />
        </div>
        <div className="col-8">
          {this.renderSidebar()}
        </div>
      </div>
    )
  }
}
export default Dashboard