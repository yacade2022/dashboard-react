import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import axios from "axios";
import { reducer } from "../reducer/CustomerReducer";

const url = "https://dummyjson.com/users";

const initialState = {
  customers: [],
  isLoading: false,
};

const CustomerContext = React.createContext();
export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const results = await axios.get(url);
      const { users } = results.data;
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "GET_USERS", payload: users });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };
  return (
    <CustomerContext.Provider value={{ ...state, deleteUser }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};
