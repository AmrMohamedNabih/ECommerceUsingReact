import React, { useEffect, useState } from "react";
import { createSubCategory } from "../../redux/actions/subcategoryAction";
import { useSelector, useDispatch } from "react-redux";
import notify from "../../hook/useNotifaction";
import { getAllCategory } from "../../redux/actions/categoryAction";

const useAddSubcategoryhook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("There is a problem with the internet connection", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, []);
  const [id, setID] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  // Get the latest category state from Redux
  const category = useSelector((state) => state.allCategory.category);

  // Get the latest subcategory state from Redux
  const subcategory = useSelector((state) => state.subCategory.subcategory);

  // On change dropdown menu
  const handelChange = (e) => {
    console.log(e.target.value);
    setID(e.target.value);
  };

  // To save name
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  // On save data
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify("There is a problem with the internet connection", "warn");
      return;
    }
    if (id === "0") {
      notify("Please select a main category", "warn");
      return;
    }
    if (name === "") {
      notify("Please enter the category name", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      createSubCategory({
        name,
        category: id,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setID("0");
      if (subcategory) console.log(subcategory);
      if (subcategory.status === 201) {
        notify("Added successfully", "success");
      } else if (
        subcategory === "Error Error: Request failed with status code 400"
      ) {
        notify("This name is duplicated, please choose another name", "warn");
      } else {
        notify("There was a problem with the addition process", "warn");
      }

      setLoading(true);
    }
  }, [loading]);

  return [
    id,
    name,
    loading,
    category,
    subcategory,
    handelChange,
    handelSubmit,
    onChangeName,
  ];
};

export default useAddSubcategoryhook;
