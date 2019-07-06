import React, { Component } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';

import loop from "../../icons/search.png";
import "../../css/itemLibrary.css"

class ItemLibrary extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-6 text-left'>
                        <h3>Item Library</h3>
                    </div>
                    <div className='col-6 text-right'>
                    <UncontrolledButtonDropdown className="mr-2">
                        <DropdownToggle caret className="btn-mokantoru">
                            Import / Export
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Import items</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>Export items</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                        <button className='btn btn-mokantoru'>Create Item</button>
                    </div>
                </div>
                <div className='d-flex mt-3'>
                    <div className="col-3 px-1">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Outlet 1</option>
                            <option>Outlet 2</option>
                        </select>
                    </div>
                    <div className="px-1">
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret className="btn-category">
                                All categories
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Food</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                    <div className="px-1" >
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret className="btn-category">
                                All inventory
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Low stock alert</DropdownItem>
                                <DropdownItem>Out of stock alert</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                    <div className='col-2 px-1'>
                        <input className='search' type='text' placeholder='Search'/>
                        {/* <img className="searchicon" src={loop}></img>   */}
                    </div>
                    <div className='col-6'></div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Pricing</th>
                                    <th scope="col">In Stocks</th>
                                    <th className='text-center' scope="col">Stock alert</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nasi goreng</td>
                                    <td>Food</td>
                                    <td>Rp 15.000</td>
                                    <td>100</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Nasi rames</td>
                                    <td>Food</td>
                                    <td>Rp 20.000</td>
                                    <td>100</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemLibrary
