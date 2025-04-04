import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrderCash } from '../../redux/actions/checkoutAction';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../useNotifaction';
import GetAllUserCartHook from './../cart/get-all-user-cart-hook';

const OrderPayCashHook = () => {
    const [loading, setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(true);
    const [addressDetails, setAddressDetails] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [, , , , , cartID] = GetAllUserCartHook();
    
    console.log(addressDetails);

    // When user selects an address
    const handleChooseAddress = (e) => {
        setAddressDetails([]);
        if (e.target.value !== '0') get(e.target.value);
    };

    const get = async (id) => {
        setLoading(true);
        await dispatch(getOneUserAddress(id));
        setLoading(false);
    };

    // Get user address details
    const resAddress = useSelector(state => state.userAddressesReducer.oneAddress);
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAddressDetails(resAddress.data);
            } else {
                setAddressDetails([]);
            }
        }
    }, [loading]);

    // When user clicks to create a cash order
    const handleCreateOrderCash = async () => {
        if (cartID === '0') {
            notify("Please add products to your cart first", "warn");
            return;
        }
        if (addressDetails.length <= 0) {
            notify("Please select an address first", "warn");
            return;
        }
        setLoadingCreate(true);
        await dispatch(createOrderCash(cartID, {
            shippingAddress: {
                details: addressDetails.alias,
                phone: addressDetails.phone,
                city: "",
                postalCode: ""
            }
        }));
        setLoadingCreate(false);
    };

    // Get response for cash order creation
    const resOrderCash = useSelector(state => state.checkoutReducer.createOrderCash);
    useEffect(() => {
        if (loadingCreate === false) {
            if (resOrderCash && resOrderCash.status === 201) {
                notify("Your order has been successfully created", "success");
                setTimeout(() => {
                    navigate('/user/allorders');
                }, 1500);
            } else {
                notify("Failed to complete the order, please try again", "warn");
            }
        }
    }, [loadingCreate]);

    return [handleChooseAddress, addressDetails, handleCreateOrderCash];
};

export default OrderPayCashHook;
