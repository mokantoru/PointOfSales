import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'
import "../css/categories.css"

class Categories extends React.Component {
    state = {
        modal: false
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    render() {
        return (
            <div className='ml-3'>
                <div className='row mt-3'>
                    <div className='col-6 text-left'>
                        <h3>Categories</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn btn-mokantoru'>Create Category</button>
                        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal> */}
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-3'>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Outlet 1</option>
                            <option>Outlet 2</option>
                        </select>
                    </div>
                    <div className='col-3'>
                        <input type='text' placeholder='search'/>
                    </div>
                    <div className='col-6'></div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Category Name</th>
                                    <th className='text-center' scope="col">Item Stocks</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Food</td>
                                    <td className='text-center'>1</td>
                                    <td className='text-right'>
                                        <button className='btn btn-outline-secondary'>Assign To Item</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories