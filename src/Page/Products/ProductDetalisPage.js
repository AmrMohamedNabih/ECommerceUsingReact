import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import ViewHomeProductsHook from './../../hook/products/view-home-products-hook';
import ViewProductsDetalisHook from './../../hook/products/view-products-detalis-hook';
const ProductDetalisPage = () => {
    const { id } = useParams();
    const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);
    try {
        if (prod)
            var items = prod.slice(0, 4)
    } catch (e) { }
    
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
