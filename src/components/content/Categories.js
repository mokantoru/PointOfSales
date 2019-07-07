import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'
import "../../css/categories.css"

class Categories extends React.Component {
    state = {
        modal: false
    }
    
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    render() {
        return (
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-6 text-left'>
                        <h3>Categories</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn btn-mokantoru' onClick={this.toggle}>Create Category</button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size='sm'>
                            <ModalBody className='text-center'>
                                <h3 className='mt-2'>Add New Category</h3>
                                <input type='text' className='form-control mt-4' placeholder='Category Name' style={{width: '100%'}}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
                                <Button color="primary" onClick={this.toggle}>Save</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-3'>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Outlet 1</option>
                            <option>Outlet 2</option>
                        </select>
                    </div>
                    <div className='col-3 px-0'>
                        <input className='search' type='text' placeholder=' search'></input>
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
                                <tr>
                                    <td>Drink</td>
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