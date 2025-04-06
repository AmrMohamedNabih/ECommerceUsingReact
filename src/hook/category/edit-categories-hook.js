import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCategory,
  getOneCategory,
} from "../../redux/actions/categoryAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotifaction";
import avatar from "../../images/avatar.png";

const AdminEditCategoriesHook = (categoryId) => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  // Fetch category details
  useEffect(() => {
    const fetchCategory = async () => {
      if (!categoryId) return;
      try {
        const response = await dispatch(getOneCategory(categoryId)); // ✅ Fix: Use correct function
        if (response?.payload) {
          setName(response.payload.name);
          setImg(response.payload.image || avatar);
        }
      } catch (error) {
        notify("Error fetching category details", "error");
      }
    };
    fetchCategory();
  }, [categoryId, dispatch]);

  // Change name state
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  // Handle image change and save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allCategory.category);

  // Save updated data
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      notify("Please enter a category name", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    setLoading(true);
    setIsPress(true);

    try {
      const response = await dispatch(updateCategory(categoryId, formData));
      if (response?.payload?.status === 200) {
        notify("Category updated successfully", "success");
      } else {
        notify("There was an issue updating the category", "error");
      }
    } catch (error) {
      notify("Error updating category", "error");
    } finally {
      setLoading(false);
      setTimeout(() => setIsPress(false), 1000);
    }
  };

  return [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ];
};

export default AdminEditCategoriesHook;
