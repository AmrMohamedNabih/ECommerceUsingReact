import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CartItem from '../Cart/CartItem'
import UserAllOrderItem from '../User/UserAllOrderItem'
import GetOrderDetalisHook from './../../hook/admin/get-order-detalis-hook';
import ChangeOrderStatusHook from './../../hook/admin/change-order-status-hook';
import { ToastContainer } from 'react-toastify';

const AdminOrderDetalis = () => {
    const { id } = useParams()
    const [orderData, cartItems] = GetOrderDetalisHook(id)

    const [formatDate, onChangePaid, changePayOrder, onChangeDeliver, changeDeliverOrder] = ChangeOrderStatusHook(id)

    return (
        <div>

            <UserAllOrderItem orderItem={orderData} />

            <Col sm="12">
                <div className="order-details-body-admin my-2 d-flex p-4">
                    <div className="w-100">
                        <Row className="justify-content-center">
                            <Col xs="12" className=" d-flex">
                                <div className="admin-content-text py-2">Customer Details</div>
                            </Col>
                            <Col xs="12" className="d-flex">
                                <div
                                    style={{
                                        color: "#555550",
                                        fontFamily: "Almarai",
                                        fontSize: "16px",
                                    }}>
                                    Name:
                                </div>

                                <div
                                    style={{
                                        color: "#979797",
                                        fontFamily: "Almarai",
                                        fontSize: "16px",
                                    }}
                                    className="mx-2">
                                    {orderData ? orderData.user ? orderData.user.name : '' : ''}
                                </div>
                            </Col>

                            <Col xs="12" className="d-flex">
                                <div
                                    style={{
                                        color: "#555550",
                                        fontFamily: "Almarai",
                                        fontSize: "16px",
                                    }}>
                                    Phone Number:
                                </div>

                                <div
                                    style={{
                                        color: "#979797",
                                        fontFamily: "Almarai",
                                        fontSize: "16px",
                                    }}
                                    className="mx-2">
                                    {orderData ? orderData.user ? orderData.user.phone : '' : ''}
                                </div>
                            </Col>
                            <Col xs="12" className="d-flex">
                                <div
                                    style={{
                                        color: "#555550",
                                        fontFamily: "Almarai",
                                        fontSize: "16px",
                                    }}>
                                    Email:
                                </div>

                                <div
                                    style={{
                                        color: "#979797",
                                        fontFamily: "Almarai",
                                        fontSize: "16px",
                                    }}
                                    className="mx-2">
                                    {orderData ? orderData.user ? orderData.user.email : '' : ''}
                                </div>
                            </Col>
                            <div className="d-flex mt-2 justify-content-center flex-column flex-md-row">
                                <div className="mb-2 mb-md-0">
                                    <select
                                        name="pay"
                                        id="paid"
                                        onChange={onChangePaid}
                                        className="select input-form-area mt-1 text-center w-50"
                                    >
                                        <option disabled value="0">Payment</option>
                                        <option value="true">Completed</option>
                                        <option value="false">Not Completed</option>
                                    </select>
                                    <button onClick={changePayOrder} className="btn-a px-2 d-inline mx-1">
                                        Save
                                    </button>
                                </div>
                                <div>
                                    <select
                                        onChange={onChangeDeliver}
                                        name="deliver"
                                        id="deliver"
                                        className="select input-form-area mt-1 text-center w-50"
                                    >
                                        <option disabled value="0">Delivery</option>
                                        <option value="true">Completed</option>
                                        <option value="false">Not Completed</option>
                                    </select>
                                    <button onClick={changeDeliverOrder} className="btn-a px-2 d-inline mx-1">
                                        Save
                                    </button>
                                </div>
                            </div>

                        </Row>
                    </div>
                </div>
            </Col>
            <ToastContainer />
        </div>
    )
}

export default AdminOrderDetalis
