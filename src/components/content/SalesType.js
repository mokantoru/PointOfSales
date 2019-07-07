import React, { Component } from 'react';

import "../../css/salesType.css"

class SalesType extends Component {
    render() {
        return (
            <div>
               <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-6 text-left'>
                        <h3>Sales Type</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn btn-mokantoru' onClick={this.toggle}>Create Sales Type</button>
                        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size='sm'>
                            <ModalBody className='text-center'>
                                <h3 className='mt-2'>Add New Category</h3>
                                <input type='text' className='form-control mt-4' placeholder='Category Name' style={{width: '100%'}}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
                                <Button color="primary" onClick={this.toggle}>Save</Button>
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
                    <div>
                        <input className='searchSalesType' type='text' placeholder='search'></input>
                    </div>
                    <div className='col-6'></div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th className='text-center' scope="col">Gratuity Applied</th>
                                    <th className='text-right' scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dine in</td>
                                    <td className='text-center'>1 gratuity</td>
                                    <td className='text-right'>Active</td>
                                </tr>
                                <tr>
                                    <td>Take away</td>
                                    <td className='text-center'>0 gratuity</td>
                                    <td className='text-right'>Active</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default SalesType