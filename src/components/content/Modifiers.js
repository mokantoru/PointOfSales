import React, { Component } from 'react'

class Modifiers extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-6 text-left'>
                        <h3>Modifiers</h3>
                    </div>
                    <div className='col-6 text-right'>
                        <button className='btn btn-mokantoru'>Create Modifier</button>
                    </div>
                </div>
                <div className='d-flex mt-3'>
                    <div className="col-3 px-1">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Outlet 1</option>
                            <option>Outlet 2</option>
                        </select>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12'>
                    <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Modifier Set Name</th>
                                    <th className='text-left' scope="col">Options</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nasi goreng</td>
                                    <td className='text-left'>Telur mata sapi</td>
                                    <td className='text-right'>
                                        <button className='btn btn-outline-secondary'>Apply Set Item</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nasi rames</td>
                                    <td className='text-left'>Tahu goreng</td>
                                    <td className='text-right'>
                                        <button className='btn btn-outline-secondary'>Apply Set Item</button>
                                    </td>
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

export default Modifiers
