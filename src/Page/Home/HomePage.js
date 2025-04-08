import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import CardBestsellersContainer from '../../Components/Products/CardBestsellersContainer';
import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Slider from './../../Components/Home/Slider';
import DiscountSection from './../../Components/Home/DiscountSection';
import Footer from '../../Components/Uitily/Footer';
import ViewHomeProductsHook from './../../hook/products/view-home-products-hook';

const HomePage = () => {

    const [items] = ViewHomeProductsHook();
    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Slider />
            <HomeCategory />
            <CardBestsellersContainer products={items} title="Best Sellers"  />
            <DiscountSection />
            <CardProductsContainer products={items} title="Products" btntitle="See More" pathText="/products" />
        </div>
    )
}

export default HomePage
