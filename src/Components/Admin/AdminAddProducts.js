import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';

import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import AdminAddProductsHook from './../../hook/products/add-products-hook';

const AdminAddProducts = () => {

    const [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName] =
        AdminAddProductsHook();
        
    return (
        <div className="pt-3">
            <Row className="justify-content-start">
                <div className="admin-content-text pb-4">Add New Product</div>
                <Col sm="8">
                    <div className="text-form pb-2">Product Images</div>

                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={4}
                    />

                    <input
                        value={prodName}
                        onChange={onChangeProdName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Name"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Product Description"
                        value={prodDescription}
                        onChange={onChangeDesName}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price Before Discount"
                        value={priceBefore}
                        onChange={onChangePriceBefor}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price After Discount"
                        value={priceAftr}
                        onChange={onChangePriceAfter}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Available Quantity"
                        value={qty}
                        onChange={onChangeQty}
                    />
                    <select
                        name="cat"
                        onChange={onSeletCategory}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">Category</option>
                        {
                            category.data ? (category.data.map((item, index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            })) : null
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex mt-2 justify-content-end">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2">Save Changes</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminAddProducts;
