export const reducer = (state, action) => {
  if (action.type === "OPEN_SIDEBAR") {
    return { ...state, isSideBarOpen: true };
  }
  if (action.type === "CLOSE_SIDEBAR") {
    return { ...state, isSideBarOpen: false };
  }
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: false };
  }
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      products: action.payload.slice(0, 10),
      filter_Products: action.payload.slice(0, 10),
    };
  }
  if (action.type === "CHOOSE_CATEGORY") {
    return { ...state, category: action.payload };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { category, filter_Products, products } = state;
    let newProducts = [...products];
    if (category === "all") {
      newProducts = [...products];
    } else {
      newProducts = products.filter((product) => product.category === category);
    }

    return { ...state, filter_Products: newProducts };
  }
  if (action.type === "CHOOSE_PRICE") {
    return { ...state, sort: action.payload };
  }
  if (action.type === "SORT_PRODUCTS") {
    const { sort, filter_Products } = state;
    let newProducts = [...filter_Products];
    if (sort === "price-lowest") {
      newProducts = newProducts.sort((a, b) => a.price - b.price);
    } else {
      newProducts = newProducts.sort((a, b) => b.price - a.price);
    }

    return { ...state, filter_Products: newProducts };
  }
  if (action.type === "SINGLE_PRODUCT_LOADING") {
    return { ...state, isSingleLoading: true };
  }
  if (action.type === "SET_SINGLE_PRODUCT_LOADING") {
    return { ...state, isSingleLoading: false };
  }
  if (action.type === "GET_SINGLE_PRODUCT") {
    return { ...state, singleProduct: action.payload };
  }
  return state;
};
