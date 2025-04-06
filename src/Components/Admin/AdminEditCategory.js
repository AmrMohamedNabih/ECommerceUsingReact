import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer } from "react-toastify";
import avatar from "../../images/avatar.png";
import AdminEditCategoriesHook from "./../../hook/category/edit-categories-hook";

const AdminEditCategories = () => {
  const { id } = useParams();
  const [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ] = AdminEditCategoriesHook(id);

  return (
    <div>
      <Row className="justify-content-start pt-4">
        <div className="admin-content-text pb-4">Edit Category</div>
        <Col sm="8">
          {/* Category Image */}
          <div className="text-form pb-2">Category Image</div>
          <MultiImageInput
            images={{ img }}
            setImages={(images) =>
              onImageChange({ target: { files: [images] } })
            }
            theme="light"
            allowCrop={false}
            max={1}
          />

          {/* Category Name */}
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Category Name"
          />

          <Row>
            <Col sm="8" className="d-flex justify-content-end">
              <button onClick={handleSubmit} className="btn-save d-inline mt-2">
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminEditCategories;
