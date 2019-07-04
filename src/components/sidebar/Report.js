import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Report extends Component {
    state = {
        collapse: false,
        title: ""
    }
    
    toggle = () => {
        this.setState(state => ({ collapse: !this.props.flag }));

      }
    
      render() {
          console.log(this.props.flag);
          
        return (
          <div>
            <Link to={this.props.pageName} >{this.props.title}</Link>
            <Collapse isOpen={this.props.flag}>
                {this.props.flag ?  this.props.submenu() : null}
            </Collapse>
          </div>
        );
      }
    }

export default Report
