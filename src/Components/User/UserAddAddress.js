import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AddAddressHook from '../../hook/user/add-address-hook'
import { ToastContainer } from 'react-toastify';

const UserAddAddress = () => {
    const [alias, detalis, phone, onChangeAlias, onChangeDetalis, onChangePhone, onSubmit] = AddAddressHook()

    return (
        <div>
            <Row className="justify-content-start pt-4">
                <div className="admin-content-text">Add New Address</div>
                <Col sm="8">
                    <input
                        value={alias}
                        onChange={onChangeAlias}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Address Name (e.g., Home - Work)"
                    />
                    <textarea
                        value={detalis}
                        onChange={onChangeDetalis}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Detailed Address"
                    />
                    <input
                        value={phone}
                        onChange={onChangePhone}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Phone Number"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <button onClick={onSubmit} className="btn-save d-inline my-3">Add Address</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default UserAddAddress
