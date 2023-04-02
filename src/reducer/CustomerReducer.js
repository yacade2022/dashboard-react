export const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: false };
  }
  if (action.type === "GET_USERS") {
    return { ...state, customers: action.payload.slice(0, 10) };
  }
  if (action.type === "DELETE_USER") {
    let newCustomers = state.customers.filter(
      (customer) => customer.id !== action.payload
    );
    return { ...state, customers: newCustomers };
  }
  return { state };
};
