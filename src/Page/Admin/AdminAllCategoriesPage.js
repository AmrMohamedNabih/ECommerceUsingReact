// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import AdminSideBar from '../../Components/Admin/AdminSideBar'
// import AdminAllCategories from '../../Components/Admin/AdminAllCategories'
// import Pagination from '../../Components/Uitily/Pagination'
// import ViewCategoryAdminHook from './../../hook/admin/view-category-admin-hook';
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCategoryPage } from './../../redux/actions/categoryAction';

// const AdminAllCategoriesPage = () => {
//     const dispatch = useDispatch();
//     const [items, pagination,onPress] = ViewCategoryAdminHook();
//     if (pagination)
//         var pageCount = pagination;
//     else
//         pageCount = 0;



//     return (
//         <Container >
//             <Row className='py-3'>
//                 <Col sm="3" xs="2" md="2">
//                     <AdminSideBar />
//                 </Col>

//                 <Col sm="9" xs="10" md="10">
//                     <AdminAllCategories categories={items} />
//                     {
//                         pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={onPress} />) : null
//                     }
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default AdminAllCategoriesPage

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllCategories from '../../Components/Admin/AdminAllCategories';
import Pagination from '../../Components/Uitily/Pagination';
import ViewCategoryAdminHook from '../../hook/admin/view-category-admin-hook';

const AdminAllCategoriesPage = () => {
  const [items, pagination, onPress] = ViewCategoryAdminHook();

  // Compute pageCount safely
  const pageCount = pagination || 0;

  return (
    <Container fluid className="px-10">
      <Row className='py-3 flex-column flex-sm-row'>
        <Col sm="3" xs="12" md="3">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="12" md="9">
          <AdminAllCategories categories={items} />
          {pageCount > 1 && <Pagination pageCount={pageCount} onPress={onPress} />}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllCategoriesPage;