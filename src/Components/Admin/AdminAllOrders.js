import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import UserGetAllOrderHook from './../../hook/user/user-get-all-order-hook';
import Pagination from '../Uitily/Pagination';

const AdminAllOrders = () => {
    const [userName, results, paginate, orderData, onPress] = UserGetAllOrderHook()

    return (
        <div className="pt-3">
            <div className='admin-content-text pb-3'>Manage All Orders</div>
            <Row className='justify-content-start'>

                {
                    orderData.length >= 1 ? (orderData.map((orderItem, index) => {
                        return <AdminAllOrdersItem key={index} orderItem={orderItem} />
                    })) : <h6>No orders available yet</h6>
                }

                {
                    paginate.numberOfPages >= 2 ? (<Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />) : null
                }
            </Row>
        </div>
    )
}

export default AdminAllOrders;
