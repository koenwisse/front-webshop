import { FETCH_PRODUCTS_SUCCESS, PRODUCT_DETAILS_FETCHED } from "./actions";

const initialState = { all: [] };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        all: action.payload,
      };
    case PRODUCT_DETAILS_FETCHED:
      return {
        ...state,
        details: action.payload,
      };

    default: {
      return state;
    }
  }
}
