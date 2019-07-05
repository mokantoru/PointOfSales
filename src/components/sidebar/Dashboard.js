import React from "react"

import SideBar from "./Sidebar";
import TableManage from "../content/TableManage";
import Sale from "../content/Sale";

import "../../css/dashboard.css"
import Capital from "../content/Capital.js";
import Categories from "../content/Categories";
import ItemLibrary from "../content/ItemLibrary";
import Modifiers from "../content/Modifiers";
import Promo from "../content/Promo";

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
    if (page === "library") {
      if (page2 === "categories") {
        return <Categories />
      } else if (page2 === "itemlibrary") {
        return <ItemLibrary />
      } else if (page2 === "modifiers") {
        return <Modifiers />
      } else if (page2 === "promo") {
        return <Promo />
      }
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