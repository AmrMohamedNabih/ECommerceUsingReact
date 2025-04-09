import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminAllOrdersItem = ({ orderItem }) => {

    console.log(orderItem)
    return (
        <Col sm="12" className="mb-3">
            <Link to={`/admin/orders/${orderItem._id}`} className="cart-item-body-admin mt-2 mb-4 d-flex p-4" style={{ textDecoration: "none" }}>
                <div className="w-100">
                    <Row className="mb-2">
                        <Col>
                            <div className="d-inline card-price">Order # {orderItem.id}</div>
                        </Col>
                        <Col xs="auto">
                            <h5 className="card-price fw-bold"><span className="mr-2">Total Order Fees:</span>{orderItem.totalOrderPrice || 0} EGP</h5>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <div className="fw-semibold order-name">Order from: <span className="text-dark">{orderItem.user?.name || ''}</span></div>
                            <div className="text-muted small">{orderItem.user?.email || ''}</div>
                        </Col>
                    </Row>

                    <Row className="gy-2">
                        <Col md="4">
                            <div className="fw-semibold d-inline stat">Delivery Status:</div>
                            <div className={orderItem.isDelivered ? "text-success" : "text-danger"}>
                                {orderItem.isDelivered ? 'Delivered' : 'Not Delivered'}
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="fw-semibold d-inline stat">Payment Status:</div>
                            <div className={orderItem.isPaid ? "text-success" : "text-danger"}>
                                {orderItem.isPaid ? 'Paid' : 'Not Paid'}
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="fw-semibold d-inline stat">Payment Method:</div>
                            <div className="text-dark">
                                {orderItem.paymentMethodType === 'cash' ? 'Cash' : 'Credit Card'}
                            </div>
                        </Col>
                    </Row>

                </div>
            </Link>
        </Col >
    )
}

export default AdminAllOrdersItem
