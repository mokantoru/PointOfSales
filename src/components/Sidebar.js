import React from "react"
import { Link } from "react-router-dom"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Report from './MenuSidebar'
import { async } from "q";


class SideBar extends React.Component {
  tableManagement = () => {
    return (
      <ul className="ulmenusidebar">
        <li>
          <Link to="/tablemanagement/apps">
            Apps
          </Link>
        </li>
        <li>
          <Link to="/tablemanagement/capital">
            Capital
          </Link>
        </li>
        <li>
          <Link to="/tablemanagement/mokantoru">
            Mokantoru
          </Link>
        </li>
      </ul>
    )
  }

  library = () => {
    return (
      <ul className="ulmenusidebar">
        <li>Item Library</li>
        <li>Modifiers</li>
        <li>Categories</li>
        <li>Promo</li>
        <li>Discounts</li>
        <li>Taxes</li>
        <li>Gratuity</li>
        <li>Sales types</li>
      </ul>
    )
  }

  ingredient = () => {
    return (
      <ul className="ulmenusidebar">
        <li>Item Library</li>
        <li>Modifiers</li>
        <li>Categories</li>
        <li>Promo</li>
        <li>Discounts</li>
        <li>Taxes</li>
        <li>Gratuity</li>
        <li>Sales types</li>
      </ul>
    )
  }

  kontoru = () => {
    return (
      <ul className="ulmenusidebar">
        <li>Item Library</li>
        <li>Modifiers</li>
        <li>Categories</li>
        <li>Promo</li>
        <li>Discounts</li>
        <li>Taxes</li>
        <li>Gratuity</li>
        <li>Sales types</li>
      </ul>
    )
  }



  render() {
    return (
      <div>
        <h1 className="h1sidebar">mo<strong>kantoru</strong></h1>
        <div>
          <ul className="ulsidebar">
            <li>
              <Link className="linkmenusidebar" to="/dashboard/0">
                dashboard
            </Link>
            </li>
            <li
            // onClick={() => { this.fnFlag("tablemanagement") }}
            >
              <Report
                className="linkmenusidebar"
                page="tablemanagement"
                pathname="/tablemanagement/0"
                flag={this.props.page === 'tablemanagement' ? true : false}
                title="Table Management"
                submenu={this.tableManagement} />
            </li>
            <li
            // onClick={() => { this.fnFlag("library") }}
            >
              <Report
                className="linkmenusidebar"
                page="library"
                pathname="/library/0"
                flag={this.props.page === 'library' ? true : false}
                title="Library"
                submenu={this.library} />
            </li>
            <li
            // onClick={() => { this.fnFlag("ingredient") }}
            >
              <Report
                className="linkmenusidebar"
                page="ingredient"
                pathname="/ingredient/0"
                flag={this.props.page === 'ingredient' ? true : false}
                title="Ingredient"
                submenu={this.ingredient} />
            </li>
            <li
            // onClick={() => { this.fnFlag("kontoru") }}
            >
              <Report
                className="linkmenusidebar"
                page="kontoru"
                pathname="/kontoru/0"
                flag={this.props.page === 'kontoru' ? true : false}
                title="Kontoru"
                submenu={this.kontoru} />
            </li>
            <li>
              <Link className="linkmenusidebar" to="/dashboard/">
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