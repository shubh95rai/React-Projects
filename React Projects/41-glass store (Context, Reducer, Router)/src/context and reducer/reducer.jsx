import { ADD, DECREMENT, INCREMENT, REMOVE, UPDATE_PRICE } from "./type";

const initialState = {
  total: 0,
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        products: action.payload,
      };

    case REMOVE:
      return {
        ...state,
        products: action.payload,
      };
    case UPDATE_PRICE:
      return {
        ...state,
        total: action.payload,
      };
    case INCREMENT:
      return {
        ...state,
        products: action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        products: action.payload,
      };

    default:
      throw new Error("cannot match case in reducer");
  }
}

export default reducer;
export { initialState };
