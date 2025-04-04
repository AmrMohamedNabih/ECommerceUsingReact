import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createBrand } from '../../redux/actions/brandAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotifaction'
import { addProductToCart } from './../../redux/actions/cartAction';

const AddToCartHook = (prdID, item) => {

    const dispatch = useDispatch();

    const [indexColor, setIndexColor] = useState('')
    const [colorText, setColorText] = useState('')
    const [loading, setLoading] = useState(true)
    
    const colorClick = (index, color) => {
        setIndexColor(index)
        setColorText(color)
    }

    // Add product to cart
    const addToCartHandel = async () => {
        console.log(item.availableColors)
        if (item.availableColors.length >= 1) {
            if (colorText === "") {
                notify("Please select a color first for the product", "warn")
                return
            }
        } else {
            setColorText('')
        }
        setLoading(true)
        await dispatch(addProductToCart({
            productId: prdID,
            color: colorText
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.addToCart)

    useEffect(() => {
        if (loading === false) {
            if (res && res.status === 200) {
                notify("The product has been successfully added to the cart", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("Please log in first", "warn")
            }
        }
    }, [loading])

    return [colorClick, indexColor, addToCartHandel]
}

export default AddToCartHook
