import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png'
import DeleteAddressHook from './../../hook/user/delete-address-hook';

const UserAddressCard = ({ item }) => {
    const [show, handleClose, handleShow, handleDelete] = DeleteAddressHook(item._id);

    return (
        <div className="user-address-card my-3 px-2">

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <div>Confirm Deletion</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Are you sure you want to delete this address?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="my-2 px-3 py-2">
                <Row className="d-flex justify-content-between">
                    <Col xs="6">
                        <div className="d-inline card-price">{item.alias}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div className="d-flex p-2">
                            <Link to={`/user/edit-address/${item._id}`} style={{ textDecoration: 'none' }}>
                                <div className="d-flex mx-2 icon-hover">
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
                            </Link>
                            <div onClick={handleShow} className="d-flex cursor-pointer icon-hover">
                                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 11V17" stroke="#979797" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 11V17" stroke="#979797" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 7H20" stroke="#979797" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#979797" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#979797" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="fw-semibold order-name">
                            {item.details}
                        </div>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col xs="12" className="d-flex">
                        <div className="fw-semibold order-name">
                            Phone Number:
                        </div>
                        <div
                            style={{
                                color: "#979797",
                                fontFamily: "Almarai",
                                fontSize: "16px",
                            }}
                            className="mx-2">
                            {item.phone}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default UserAddressCard
