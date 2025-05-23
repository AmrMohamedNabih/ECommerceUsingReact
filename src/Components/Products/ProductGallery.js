import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { useParams } from 'react-router-dom';
import ViewProductsDetalisHook from './../../hook/products/view-products-detalis-hook';

const ProductGallery = () => {
    const { id } = useParams();
    const [item, images, cat, brand] = ViewProductsDetalisHook(id);

    return (
        <div className="image-container" style={{ maxWidth: '600px', maxHeight: '350px', margin: '0 auto' }}>
            <ImageGallery
                items={images}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
