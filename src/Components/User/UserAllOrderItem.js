import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'

const UserAllOrderItem = ({ orderItem }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">
                    Order No. #{orderItem.id || 0} - Placed on {formatDate(orderItem.createdAt)}
                </div>
            </Row>

            {orderItem.cartItems ? (
                orderItem.cartItems.map((item, index) => (
                    <UserAllOrderCard key={index} item={item} />
                ))
            ) : null}

            <Row className="d-flex justify-content-between">
                <Col xs="6" className="d-flex">
                    <div>
                        <div className="d-inline">Delivery:</div>
                        <div className="d-inline mx-2 stat">
                            {orderItem.isDelivered ? 'Delivered' : 'Not Delivered'}
                        </div>
                    </div>
                    <div>
                        <div className="d-inline">Payment:</div>
                        <div className="d-inline mx-2 stat">
                            {orderItem.isPaid ? 'Paid' : 'Not Paid'}
                        </div>
                    </div>
                    <div>
                        <div className="d-inline">Payment Method:</div>
                        <div className="d-inline mx-2 stat">
                            {orderItem.paymentMethodType === 'cash' ? 'Cash' : 'Credit Card'}
                        </div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="brand-text">{orderItem.totalOrderPrice || 0} EGP</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem
