import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCategory } from '../../redux/actions/categoryAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotifaction';
import avatar from '../../images/avatar.png';

const AddCategoryHook = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    // Change name state
    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value);
    };

    // Handle image change and save it
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            console.log(event.target.files[0]);
            setImg(URL.createObjectURL(event.target.files[0]));
            setSelectedFile(event.target.files[0]);
        }
    };

    const res = useSelector((state) => state.allCategory.category);

    // Save data to database
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name === "" || selectedFile === null) {
            console.log('Please complete the required data');
            notify('Please complete the required data', "warn");
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectedFile);
        setLoading(true);
        setIsPress(true);
        await dispatch(createCategory(formData));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            setImg(avatar);
            setName("");
            setSelectedFile(null);
            console.log('Process completed');
            setLoading(true);
            setTimeout(() => setIsPress(false), 1000);

            if (res.status === 201) {
                notify('Category added successfully', "success");
            } else {
                notify('There was an issue adding the category', "error");
            }
        }
    }, [loading]);

    return [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName];
};

export default AddCategoryHook;
