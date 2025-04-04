import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardProductsContainer from './../Products/CardProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';

const UserFavoriteProduct = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            setLoading(true);
            await dispatch(getProductWishList());
            setLoading(false);
        };
        fetchWishlist();
    }, []);

    const res = useSelector(state => state.addToWishListReducer.allWishList);

    useEffect(() => {
        if (!loading && res) {
            setItems(res.data);
        }
    }, [loading]);

    return (
        <div>
            <div className="admin-content-text pb-4">Favorite List</div>
            <Row className="justify-content-start">
                {items.length <= 0 ? (
                    <h6>No favorite products available at the moment</h6>
                ) : (
                    <CardProductsContainer products={items} title="" btntitle="" />
                )}
            </Row>
        </div>
    );
};

export default UserFavoriteProduct;
