import React from "react"
import { Link } from "react-router-dom"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Report from './sidebar/Report'


class SideBar extends React.Component {
  // state = {
  //   collapse: false
  // }

  // toggle = () => {
  //   this.setState(state => ({ collapse: !state.collapse }));
  // }

  tableManagement = () => {
      return (
        <ul>
          <li>
            Apps
          </li>
          <li>
            Capital
          </li>
          <li>
            Mokantoru
          </li>
          
        </ul>
      )
  }

  library = () => {
    return(
      <ul>
          <li>
            Item Library
          </li>
          <li>
            Modifiers
          </li>
          <li>
            Categories
          </li>
          <li>
            Promo
          </li>
          <li>
            Discounts
          </li>
          <li>
            Taxes
          </li>
          <li>
            Gratuity
          </li>
          <li>
            Sales types
          </li>
        </ul>
    )
  }

  ingredient = () => {
    return(
      <ul>
          <li>
            Item Library
          </li>
          <li>
            Modifiers
          </li>
          <li>
            Categories
          </li>
          <li>
            Promo
          </li>
          <li>
            Discounts
          </li>
          <li>
            Taxes
          </li>
          <li>
            Gratuity
          </li>
          <li>
            Sales types
          </li>
        </ul>
    )
  }

  kontoru = () => {
    return(
      <ul>
          <li>
            Item Library
          </li>
          <li>
            Modifiers
          </li>
          <li>
            Categories
          </li>
          <li>
            Promo
          </li>
          <li>
            Discounts
          </li>
          <li>
            Taxes
          </li>
          <li>
            Gratuity
          </li>
          <li>
            Sales types
          </li>
        </ul>
    )
  }

  

  render() {
    // const {page} = this.props.match.params
    const page = 0
    console.log(this.props);
    

    return (
      <div>
        <h1>ini sidebar</h1>
        {/* Sidebar Menu */}
        <div>
            <Link to="/dashboard/dashboard">
              dashboard
            </Link>
          <ul>
            <li>
              <Link to="/dashboard/dashboard">
                <Report pageName="/dashboard/tablemanagement" flag={this.props.page === 'tablemanagement' ? true : false}  title="Table Management" submenu={this.tableManagement}/>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/">
                <Report pageName="/dashboard/library" flag={this.props.page === 'library' ? true : false} title="Library" submenu={this.library}/>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/">
                <Report pageName="/dashboard/ingredient" flag={this.props.page === 'ingredient' ? true : false} title="Ingredient" submenu={this.ingredient}/>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/report">
                <Report pageName="/dashboard/kontoru" flag={this.props.page === 'kontoru' ? true : false} title="Kontoru" submenu={this.kontoru}/>
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