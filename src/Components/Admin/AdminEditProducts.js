import React from 'react'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';

import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';
import AdminEditProductsHook from './../../hook/products/edit-products-hook';

const AdminEditProducts = () => {
    const { id } = useParams();

    const [CatID, onChangeDesName, onChangeQty, onChangePriceAfter, onChangePriceBefore, onChangeProdName, category, priceAfter, images, setImages, onSelect, onRemove, options, handleChangeComplete, onSelectCategory, handleSubmit,  priceBefore, qty, prodDescription, prodName] =
        AdminEditProductsHook(id);

    return (
        <div>
            <Row className="justify-content-start pt-3">
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
                        <option value="0">Category</option>
                        {
                            category.data ? (category.data.map((item) => {
                                return (
                                    <option value={item._id}>{item.name}</option>
                                )
                            })) : null
                        }
                    </select>

                    
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

export default AdminEditProducts;
