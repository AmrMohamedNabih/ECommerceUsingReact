import React from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';

import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
// import AdminEditCategoriesHook from './../../hook/category/edit-categories-hook';
import AdminEditProductsHook from './../../hook/products/edit-products-hook';

const AdminEditCategories = () => {
    const { id } = useParams();

    // const [CatID, BrandID, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefore, onChangeProdName, showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handleChangeComplete, removeColor, onSelectCategory, handleSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName] =
        // AdminEditCategoriesHook(id);

    const [CatID, BrandID, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefore, onChangeProdName, showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handleChangeComplete, removeColor, onSelectCategory, handleSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName] =
            AdminEditProductsHook(id);

    return (
        <div>
            <Row className="justify-content-start pt-10">
                <div className="admin-content-text pb-4">Edit Product - {prodName}</div>
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
                        onChange={onChangePriceBefore}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price After Discount"
                        value={priceAfter}
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
                        value={CatID}
                        onChange={onSelectCategory}
                        className="select input-form-area mt-3 px-2">
                        <option value="0">Main Category</option>
                        {
                            category.data ? (category.data.map((item) => {
                                return (
                                    <option value={item._id}>{item.name}</option>
                                )
                            })) : null
                        }
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="Subcategory"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        value={BrandID}
                        onChange={onSelectBrand}
                        className="select input-form-area mt-3 px-2">
                        <option value="0">Select Brand</option>
                        {
                            brand.data ? (brand.data.map((item) => {
                                return (
                                    <option value={item._id}>{item.name}</option>
                                )
                            })) : null
                        }
                    </select>
                    <div className="text-form mt-3">Available Product Colors</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div key={index}
                                            onClick={() => removeColor(color)}
                                            className="color ms-2 border mt-1"
                                            style={{ backgroundColor: color }}></div>
                                    )
                                })
                            ) : null
                        }

                        <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {
                            showColor === true ? <CompactPicker onChangeComplete={handleChangeComplete} /> : null
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2">Save Changes</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminEditCategories;
