import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserAllOrderCard = ({ item }) => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="2" className="d-flex justify-content-start">
                    <Link to={`/products/${item.product?._id}`} style={{ textDecoration: 'none' }}>
                        <img width="100px" height="120px" src={item.product?.imageCover} alt="productImage" />
                    </Link>
                </Col>
                <Col xs="8" md="6">
                    <div className="d-inline pt-2 stat">
                        {item.product?.title || ''}
                    </div>
                    <div className="d-flex">
                        <div className="order-name d-inline">Quantity:</div>
                        <div className="d-inline pt-2 stat">
                            {item.count || ''}
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderCard
