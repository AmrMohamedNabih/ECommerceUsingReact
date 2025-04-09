import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import EditAddressHook from './../../hook/user/edit-address-hook';
import { ToastContainer } from 'react-toastify';

const UserEditAddress = () => {
    const { id } = useParams();
    const [handleEdit, alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone] = EditAddressHook(id);

    return (
        <div>
            <Row className="justify-content-start pt-4">
                <div className="admin-content-text">Edit Address</div>
                <Col sm="8">
                    <input
                        value={alias}
                        onChange={onChangeAlias}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Address Label (e.g., Home - Work)"
                    />
                    <textarea
                        value={details}
                        onChange={onChangeDetails}
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
                    <button onClick={handleEdit} className="btn-edit-address d-inline my-3">Save Address Changes</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    );
}

export default UserEditAddress;
