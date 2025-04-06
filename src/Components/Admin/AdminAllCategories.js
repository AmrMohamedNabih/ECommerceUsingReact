import React from "react";
import { Row } from "react-bootstrap";
import AdminAllCategoriesCard from "./AdminAllCategoriesCard";

const AdminAllCategories = ({ categories }) => {
  return (
    <div className="pt-10">
      <div className="admin-content-text">Manage All Categories</div>
      <Row className="justify-content-start">
        {categories ? (
          categories.map((item, index) => (
            <AdminAllCategoriesCard key={index} item={item} />
          ))
        ) : (
          <h4>No categories available yet</h4>
        )}
      </Row>
    </div>
  );
};

export default AdminAllCategories;
