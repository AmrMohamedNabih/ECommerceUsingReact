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
    <div className="d-inline">
      <Row>
        <Col md="8">
          <div className="card-title d-inline">
            {item.title}
          </div>
        </Col>
      </Row>
      {/* <Row className="mt-4">
        <div className="details-description">Description :</div>
      </Row> */}
      <Row className="mt-2">
        <Col md="10">
          <div className="details-description d-inline">
            {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12" className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="d-flex">
              <div className="card-price">
                {item.priceAfterDiscount >= 1 ?
                  (<div>{item.priceAfterDiscount}<span className="card-currency mx-1">EGP</span> <span style={{ textDecorationLine: 'line-through', color: "#979797", fontSize: "14px" }}>{item.price}</span> </div>)
                  : item.price}
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex p-2 cart-icon-wrapper" onClick={addToCartHandle}>
              <span className="cart-icon mx-2">Add to Cart</span>
              <svg className="cart-icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.99219 11H11.9922M13.9922 11H11.9922M11.9922 11V9M11.9922 11V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  )
}

export default ProductText
