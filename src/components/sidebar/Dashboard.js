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
import Discount from "../content/Discount"
import Taxes from "../content/Taxes"
import Gratuity from "../content/Gratuity"
import Navbar from "../Navbar"
import SalesType from "../content/SalesType";

class Dashboard extends React.Component {
  state = {
    flag: true
  }
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
      } else if (page2 === "discount") {
        return <Discount />
      } else if (page2 === "taxes") {
        return <Taxes />
      } else if (page2 === "gratuity") {
        return <Gratuity />
      } else if (page2 === "salestype") {
        return <SalesType />
      }
    }
  }
  onClickBurger = () => {
    document.getElementsByClassName("burger")[0].classList.toggle("change")
    if (this.state.flag) {
      document.getElementsByClassName('divcol-2')[0].style.width = "250px"
      this.setState((prevState => ({ flag: !prevState.flag })))
    } else {
      document.getElementsByClassName('divcol-2')[0].style.width = "120px"
      this.setState((prevState => ({ flag: !prevState.flag })))
    }

  }
  render() {
    return (
      <div>
        <Navbar onClickBurger={this.onClickBurger} />
        <div className="divcol-2">
          <SideBar page={this.props.match.params.page} />
        </div>
        <div className="divcol-10">
          {this.renderSidebar()}
        </div>
      </div>
    )
  }
}
export default Dashboard