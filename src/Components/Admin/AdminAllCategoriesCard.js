import React, { useState, useEffect } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategories } from "../../redux/actions/categoryAction";

const AdminAllCategoriesCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteCategories(item._id));
    setShow(false);
    window.location.reload();
  };

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">Confirm Deletion</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">
            Are you sure you want to delete this category?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="font" variant="dark" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className="d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">
              Remove
            </div>
            <Link
              to={`/admin/editcategory/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit">Edit</div>
            </Link>
          </Col>
        </Row>
        {/* `/category/${item._id}` */}
        <Link to={""} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={item.image}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{item.name}</div>
            </Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllCategoriesCard;
