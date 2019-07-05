import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Report extends Component {
  state = {
    page: "",
    flag: false
  }
  componentDidUpdate() {
    if (this.state.page !== "") {
      if (!this.props.flag) {
        this.setState({ page: "", flag: false })
      }
    }
  }
  fnFlag = async (page) => {
    if (this.state.page === "") {
      await this.setState({ page: page, flag: true })
    } else if (this.state.page === page) {
      await this.setState({ flag: !this.state.flag })
    }
  }
  render() {
    return (
      <div>
        <Link
          className={this.props.className}
          to={this.props.pathname}
          onClick={() => { this.fnFlag(this.props.page) }}
        >
          {this.state.flag ?
            <i className="fas fa-chevron-down mr-1"></i> :
            <i className="fas fa-chevron-right mr-1"></i>
          }
          {this.props.title}
        </Link>
        <Collapse isOpen={this.state.flag}>
          {this.props.flag ? this.props.submenu() : null}
        </Collapse>
      </div>
    );
  }
}

export default Report
