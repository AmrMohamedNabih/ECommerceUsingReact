import React, { useState, useEffect } from 'react';
import { getOneCategory } from '../../redux/actions/subcategoryAction';
import { createProduct } from '../../redux/actions/productsAction';
import notify from './../../hook/useNotifaction';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from './../../redux/actions/brandAction';

const AdminAddProductsHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllBrand());
    }, []);

    // Get last category state from redux
    const category = useSelector(state => state.allCategory.category);
    // Get last brand state from redux
    const brand = useSelector(state => state.allBrand.brand);
    // Get last subcategory state from redux
    const subCat = useSelector(state => state.subCategory.subcategory);

    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList);
    };

    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList);
    };

    const [options, setOptions] = useState([]);

    // Product images state
    const [images, setImages] = useState({});
    // Product details state
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('Price Before Discount');
    const [priceAftr, setPriceAftr] = useState('Price After Discount');
    const [qty, setQty] = useState('Available Quantity');
    const [CatID, setCatID] = useState('');
    const [BrandID, SetBrandID] = useState('');
    const [subCatID, setSubCatID] = useState([]);
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [loading, setLoading] = useState(true);

    // Handlers for input fields
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value);
    };

    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value);
    };

    const onChangePriceBefore = (event) => {
        event.persist();
        setPriceBefore(event.target.value);
    };

    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAftr(event.target.value);
    };

    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value);
    };

    const onChangeColor = () => {
        setShowColor(!showColor);
    };

    // Show/hide color picker
    const [showColor, setShowColor] = useState(false);
    // Store selected colors
    const [colors, setColors] = useState([]);

    // Handle color selection
    const handleChangeComplete = (color) => {
        setColors([...colors, color.hex]);
        setShowColor(!showColor);
    };

    const removeColor = (color) => {
        const newColorList = colors.filter((e) => e !== color);
        setColors(newColorList);
    };

    // When selecting a category, store the ID
    const onSelectCategory = async (e) => {
        if (e.target.value !== 0) {
            await dispatch(getOneCategory(e.target.value));
        }
        setCatID(e.target.value);
    };

    useEffect(() => {
        if (CatID !== 0 && subCat.data) {
            setOptions(subCat.data);
        } else {
            setOptions([]);
        }
    }, [CatID]);

    // When selecting a brand, store the ID
    const onSelectBrand = (e) => {
        SetBrandID(e.target.value);
    };

    // Convert base64 to file
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    // Submit product data
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
            notify("Please complete all fields", "warn");
            return;
        }

        // Convert base64 images to file
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => dataURLtoFile(images[index], Math.random() + ".png")
        );

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);
        formData.append("priceAfterDiscount", priceAftr);
        formData.append("category", CatID);
        formData.append("brand", BrandID);

        setTimeout(() => {
            formData.append("imageCover", imgCover);
            itemImages.forEach((item) => formData.append("images", item));
        }, 1000);

        setTimeout(() => {
            console.log(imgCover);
            console.log(itemImages);
        }, 1000);

        colors.forEach((color) => formData.append("availableColors", color));
        seletedSubID.forEach((item) => formData.append("subcategory", item._id));

        setTimeout(async () => {
            setLoading(true);
            await dispatch(createProduct(formData));
            setLoading(false);
        }, 1000);
    };

    // Get created product message
    const product = useSelector(state => state.allproducts.products);

    useEffect(() => {
        if (!loading) {
            setColors([]);
            setImages([]);
            setProdName('');
            setProdDescription('');
            setPriceBefore('Price Before Discount');
            setPriceAftr('Price After Discount');
            setQty('Available Quantity');
            SetBrandID(0);
            setSeletedSubID([]);
            setTimeout(() => setLoading(true), 1500);

            if (product) {
                if (product.status === 201) {
                    notify("Product added successfully", "success");
                } else {
                    notify("There was an issue", "error");
                }
            }
        }
    }, [loading]);

    return [
        onChangeDesName, 
        onChangeQty, 
        onChangeColor, 
        onChangePriceAfter, 
        onChangePriceBefore, 
        onChangeProdName, 
        showColor, 
        category, 
        brand, 
        priceAftr, 
        images, 
        setImages, 
        onSelect, 
        onRemove, 
        options, 
        handleChangeComplete, 
        removeColor, 
        onSelectCategory, 
        handleSubmit, 
        onSelectBrand, 
        colors, 
        priceBefore, 
        qty, 
        prodDescription, 
        prodName
    ];
};

export default AdminAddProductsHook;
