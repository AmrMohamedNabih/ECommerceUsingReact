import React, { useState, useEffect } from 'react'
import { Card, Col } from 'react-bootstrap'

import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import ProductCardHook from './../../hook/products/product-card-hook';

const ProductCard = ({ item, favProd }) => {

    const [removeToWishListData, addToWishListData, handelFav, favImg] = ProductCardHook(item, favProd)

    return (
        <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

            <Card className="my-2 product-card">
                <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img style={{ height: "100%", width: "100%" }} src={item.imageCover} />
                </Link>
                <Card.Body style={{ backgroundColor: "rgba(176, 120, 123, 0.5)" }} >
                    <Card.Title>
                        <div className="card-title">
                            {item.title}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <div className="card-price">
                                    {item.priceAfterDiscount >= 1 ?
                                        (<div><span style={{ textDecorationLine: 'line-through' }}>{item.price}</span> {item.priceAfterDiscount}</div>)
                                        : item.price}
                                </div>
                                <div className="card-currency mx-1">EGP</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Col>
    )
}

export default ProductCard
