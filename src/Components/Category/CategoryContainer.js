import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const CategoryContainer = ({ data, loading }) => {

    return (
        <Container >
            <div className="admin-content-text mt-10">All Categories</div>
            <Row className='my-2 d-flex'>

                {
                    loading === false ? (
                        data ? (
                            data.map((item, index) => {
                                return (<CategoryCard key={index} id={item._id} title={item.name} img={item.image} />)
                            })
                        ) : <h4>No Categories Available</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }

            </Row>
        </Container>
    )
}

export default CategoryContainer
