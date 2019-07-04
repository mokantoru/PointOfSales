import React from "react"

import SideBar from "./SideBar";
import TeamManage from "./TeamManage";
import Sale from "./Sale";

import '../css/dashboard.css'

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
    const { page } = this.props.match.params

    return (
      <div className="d-flex">
        <div className="col-2">
          <SideBar page={page}/>
        </div>
        <div className="col-8">
          {this.renderSidebar()}
        </div>
      </div>
    )
  }
}
export default Dashboard