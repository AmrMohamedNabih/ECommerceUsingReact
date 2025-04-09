import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import ProfileHook from '../../hook/user/profile-hook';
import deleteicon from '../../images/delete.png';
import { ToastContainer } from 'react-toastify';

const UserProfile = () => {
    const [user, show, handleClose, handleShow, handelSubmit, name, email, phone, onChangeName, onChangeEmail, onChangePhone, changePassword, oldPassword, newPassword, confirmNewPassword, onChangeOldPass, onChangeNewPass, onChangeConfirmPass] = ProfileHook();

    return (
        <div>
            <div className="admin-content-text pt-4">Profile Page</div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <div>Edit Personal Information</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="Username"
                    />
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        type="email"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="Email"
                    />
                    <input
                        value={phone}
                        onChange={onChangePhone}
                        type="phone"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="Phone Number"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-success" style={{ backgroundColor: '#b0787b' }} onClick={handelSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="user-address-card my-2 px-3 py-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">Name:</div>
                        <div className="p-1 item-delete-edit">{user.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div onClick={handleShow} className="d-flex mx-2 icon-hover">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title />
                                <g id="Complete">
                                    <g id="edit">
                                        <g>
                                            <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#979797" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#979797" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>

                    </Col>
                </Row>

                <Row>
                    <Col xs="12" className="d-flex">
                        <div className="p-2">Phone Number:</div>
                        <div className="p-1 item-delete-edit">{user.phone}</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="d-flex">
                        <div className="p-2">Email:</div>
                        <div className="p-1 item-delete-edit">{user.email}</div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="12" sm="8" md="6">
                        <div className="admin-content-text my-1">Change Password</div>
                        <input
                            value={oldPassword}
                            onChange={onChangeOldPass}
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="Enter Old Password"
                        />
                        <input
                            value={newPassword}
                            onChange={onChangeNewPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter New Password"
                        />
                        <input
                            value={confirmNewPassword}
                            onChange={onChangeConfirmPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Confirm New Password"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-start my-3">
                        <button onClick={changePassword} className="btn-save d-inline mt-2">
                            Save Password
                        </button>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserProfile;
