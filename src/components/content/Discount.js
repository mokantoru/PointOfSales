import React from 'react'
import {Modal, ModalBody, ModalFooter, Button} from 'reactstrap'

class Discount extends React.Component {
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
                        <h3>Discounts</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn btn-mokantoru' onClick={this.toggle}>Create Discount</button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size='sm'>
                            <ModalBody className='text-center'>
                                <h3 className='mt-2'>Add New Discount</h3>
                                <input type='text' className='form-control mt-4' placeholder='Discount Name' style={{width: '100%'}}/>
                                <div className='row mt-2'>
                                    <div className='col-10 pr-0'>
                                        <input type='number' className='form-control' placeholder='amount'/>
                                    </div>
                                    <div className='col-2'>
                                        <h4 className='mt-2'>%</h4>
                                    </div>
                                </div>
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
                    <div className='col-9 px-0'></div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Discount Name</th>
                                    <th className='text-right' scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Diskontoru Pelajar</td>
                                    <td className='text-right'>10%</td>
                                </tr>
                                <tr>
                                    <td>Buy one get one</td>
                                    <td className='text-right'>5%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Discount