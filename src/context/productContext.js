import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import axios from "axios";
import { reducer } from "../reducer/ProductReducer";

const url = "https://dummyjson.com/products";

const initialState = {
  products: [],
  filter_Products: [],
  singleProduct: {},
  isLoading: false,
  isSideBarOpen: false,
  isSingleLoading: false,
  category: "all",
  sort: "price-lowest",
};

const AllContext = React.createContext();
export const AllProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const openSideBar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };
  const closeSideBar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const filterProducts = (e) => {
    const value = e.target.value;
    dispatch({ type: "CHOOSE_CATEGORY", payload: value });
  };
  const sortProducts = (e) => {
    const value = e.target.value;
    dispatch({ type: "CHOOSE_PRICE", payload: value });
  };

  const fetchProduct = async () => {
    dispatch({ type: "LOADING" });
    try {
      const results = await axios.get(url);

      const { products } = results.data;

      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "GET_PRODUCTS", payload: products });
      dispatch({ type: "SORT_PRODUCTS" });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" });
    try {
      const results = await axios.get(url);
      const { data } = results;
      dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.category, state.sort]);
  return (
    <AllContext.Provider
      value={{
        ...state,
        openSideBar,
        closeSideBar,
        filterProducts,
        sortProducts,
        fetchSingleProduct,
        changeTheme,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AllContext);
};
