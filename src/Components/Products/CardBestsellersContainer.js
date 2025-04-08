import React from 'react';
import { Container } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle';
import ProductCard from './ProductCard';
import CardContainerHook from './../../hook/products/card-container-hook';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const CardBestsellersContainer = ({ title, btntitle, pathText, products }) => {
    const [favProd] = CardContainerHook();

    return (
        <Container>
            {products && (
                <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
            )}

            <Swiper
                className="custom-swiper custom-swiper-wrapper"
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={5}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                }}
            >
                {products &&
                    products.map((item, index) => (
                        <SwiperSlide key={index} >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                <div style={{ width: '70%', margin:'30px' }}>
                                    <ProductCard favProd={favProd} item={item} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Container>
    );
};

export default CardBestsellersContainer;
