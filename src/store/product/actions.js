import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const PRODUCT_DETAILS_FETCHED = "PRODUCT_DETAILS_FETCHED";

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductDetailsSuccess = (details) => {
  return {
    type: PRODUCT_DETAILS_FETCHED,
    payload: details,
  };
};

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost:4000/shop`);
      console.log(response.data);
      dispatch(fetchProductsSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchProductDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`http://localhost:4000/shop/${id}`);
      dispatch(fetchProductDetailsSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
