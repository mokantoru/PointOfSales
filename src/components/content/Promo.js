import React, { Component } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';
import "../../css/promo.css"

class Promo extends Component {
    render() {
        return (
            <div>
                <div>
                <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-6 text-left'>
                        <h3>Promo</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn btn-mokantoru'>Create Promo</button>
                    </div>
                </div>
                <div className='d-flex mt-3'>
                <UncontrolledButtonDropdown className="mr-2">
                        <DropdownToggle caret className="btn-category">
                            All Promo Type
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Buy X Get Y</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>Set Menu</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                <UncontrolledButtonDropdown className="mr-2">
                        <DropdownToggle caret className="btn-category">
                            All Status
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Scheduled</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>On Going</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>Inactive</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <div className='col-2 px-1'>
                        <input className='searchPromo' type='text' placeholder='Search'/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                    <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Promo Name</th>
                                    <th className='text-left' scope="col">Promo Type</th>
                                    <th className='text-left' scope="col">Time Period</th>
                                    <th className='text-left' scope="col">Outlet</th>
                                    <th scope="col">Promo Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Buy 1 get 1</td>
                                    <td className='text-left'>Buy X get Y</td>
                                    <td className='text-left'>Time</td>
                                    <td className='text-left'>Outlet 1</td>
                                    <td className='text-left'>Inactive</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Promo