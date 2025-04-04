import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ViewAddressesHook from './../../hook/user/view-addresses-hook';
import OrderPayCashHook from './../../hook/checkout/order-pay-cash-hook';
import { ToastContainer } from 'react-toastify';

const ChoosePayMethod = () => {

    const [res] = ViewAddressesHook()
    const [handleChooseAddress, addressDetails, handleCreateOrderCash] = OrderPayCashHook()

    return (
        <div>
            <div className="admin-content-text pt-5">Choose Payment Method</div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-2">
                        <input
                            style={{ cursor: 'pointer' }}
                            name="group"
                            id="group1"
                            type="radio"
                            value="Payment by Visa"
                            className="mt-2"
                        />
                        <label style={{ cursor: 'pointer' }} className="mx-2" htmlFor="group1">
                            Payment by Credit Card
                        </label>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs="12" className="d-flex">
                        <input style={{ cursor: 'pointer' }}
                            name="group"
                            id="group2"
                            type="radio"
                            value="Cash on Delivery"
                            className="mt-2"
                        />
                        <label style={{ cursor: 'pointer' }} className="mx-2" htmlFor="group2">
                            Cash on Delivery
                        </label>
                    </Col>
                </Row>


                <Row className="mt-2">
                    <Col xs="4" className="d-flex">
                        <select name="address" id="address" className="select mt-1 px-2 " onChange={handleChooseAddress} >
                            <option value="0">Choose a Shipping Address</option>
                            {
                                res.data ? (res.data.map((item, index) => {
                                    return <option key={item._id} value={item._id}>{item.alias}</option>
                                })) : <option key={0} value={0}>No Registered Addresses</option>
                            }

                        </select>
                    </Col>
                </Row>



            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline   border">34,000 EGP</div>
                    <div onClick={handleCreateOrderCash} className="product-cart-add px-3 pt-2 d-inline me-2"> Complete Purchase</div>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default ChoosePayMethod
