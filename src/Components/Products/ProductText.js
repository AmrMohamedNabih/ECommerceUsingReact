import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ViewProductsDetalisHook from './../../hook/products/view-products-detalis-hook';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

import AddToCartHook from './../../hook/cart/add-to-cart-hook';

const ProductText = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductsDetalisHook(id);
  const [colorClick, indexColor, addToCartHandle] = AddToCartHook(id, item)

  return (
    <div className="d-inline text-center mt-4">
      <Row>
        <Col>
          <div className="card-title d-inline">
            {item.title}
          </div>
        </Col>
      </Row>
      {/* <Row className="mt-4">
        <div className="details-description">Description :</div>
      </Row> */}
      <Row className="mt-2">
        <Col>
          <div className="details-description d-inline">
            {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="d-flex">
            <div className="d-flex">
              <div className="card-price">
                {item.priceAfterDiscount >= 1 ?
                  (<div>{item.priceAfterDiscount}<span className="card-currency mx-1">EGP</span> <span style={{ textDecorationLine: 'line-through', color: "#979797", fontSize: "14px" }}>{item.price}</span> </div>)
                  : item.price}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  )
}

export default ProductText
