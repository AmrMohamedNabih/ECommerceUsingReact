import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({ background, img, title, id }) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-4 d-flex justify-content-around">
            <div className="mb-3">
                <div className="category-card">
                    <Link to={`/products/category/${id}`} style={{ textDecoration: 'none' }}>
                        <img alt="zcv" src={img} className="category-card-img" />
                    </Link>
                </div>
                <Link to={`/products/category/${id}`} style={{ textDecoration: 'none' }}>
                    <p className="category-card-text my-2">{title}</p>
                </Link>
            </div>
        </Col>
    )
}

export default CategoryCard
