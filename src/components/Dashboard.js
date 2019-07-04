import React from "react"

import SideBar from "./SideBar";
import TeamManage from "./TeamManage";
import Sale from "./Sale";

class Dashboard extends React.Component {
  renderSidebar = () => {
    console.log(this.props.match.params.page);
    const { page } = this.props.match.params
    if (page === "teammanagement") {
      return <TeamManage />
    }
    if (page === "sales") {
      return <Sale />
    }
  }
  render() {
    return (
      <div className="d-flex">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-8">
          {this.renderSidebar()}
        </div>
      </div>
    )
  }
}
export default Dashboard