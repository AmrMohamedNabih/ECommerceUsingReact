import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import cake from '../../images/cake.png'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center">
                <Col sm="6">
                    <img className="dicount-img" src={cake} alt="" />
                </Col>
                <Col sm="6">
                    <div className="discount-title">
                        Where every dessert is a masterpiece
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection
