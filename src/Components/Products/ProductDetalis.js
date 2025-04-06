import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetalis = () => {
   
    return (
        <div>
            <div>
            <Row className='py-3'>
                <Col lg="4" md="12">
                    <ProductGallery />
                </Col>
                <Col lg="8" md="12" className="pt-24">
                    <ProductText />
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default ProductDetalis
