import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllCategoryPage } from "./../../redux/actions/categoryAction";

const ViewCategoryAdminHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory(8));
  }, [dispatch]);

  const onPress = async (page) => {
    await dispatch(getAllCategoryPage(page, 8));
  };
  let items = [];
  let pagination = [];
  const allCategories = useSelector((state) => state.allCategory.category);
  // try {

  //     if (allCategories.data)
  //         items = allCategories.data;
  //     else
  //         items = []

  //     if (allCategories.paginationResult)
  //         pagination = allCategories.paginationResult.numberOfPages;
  //     else
  //         pagination = []
  // } catch (e) { }
  // return [items, pagination, onPress]

  if (allCategories) {
    items = allCategories.data || [];
    pagination = allCategories.paginationResult?.numberOfPages || [];
  }

  return [items, pagination, onPress];
};

export default ViewCategoryAdminHook;
