import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pagination from '../../Components/Uitily/Pagination'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAddAddress from '../../Components/User/UserAddAddress';
const UserAddAddressPage = () => {
    return (
        <Container fluid className="px-10">
            <Row className='py-3 flex-column flex-sm-row'>
                <Col sm="3" xs="12" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="12" md="9">
                    <UserAddAddress />
                </Col>
            </Row>
        </Container>
    )
}
export default UserAddAddressPage
