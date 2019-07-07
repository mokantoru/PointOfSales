import React from "react"
import { Link } from "react-router-dom"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import MenuSideBar from './MenuSidebar.js'

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
        <li>
          <Link to="/library/itemlibrary">
            Item Library
          </Link>
        </li>
        <li>
          <Link to="/library/modifiers">
            Modifiers
          </Link>
        </li>
        <li>
          <Link to="/library/categories">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/library/promo">
            Promo
          </Link>
        </li>
        <li>
          <Link to="/library/discount">
            Discounts
          </Link>
        </li>
        <li>
          <Link to="/library/taxes">
            Taxes
          </Link>
        </li>
        <li>
          <Link to="/library/gratuity">
            Gratuity
          </Link>
        </li>
        <li>
          <Link to="/library/salestype">
            Sales types
          </Link>
        </li>
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
      <div className="container-fluid">
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
              <MenuSideBar
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
              <MenuSideBar
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
              <MenuSideBar
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
              <MenuSideBar
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