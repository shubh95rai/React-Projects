import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { ADD, DECREMENT, INCREMENT, REMOVE, UPDATE_PRICE } from "./type";

const GlobalContext = createContext();

function GlobalState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToBasket(product) {
    const updatedBasket = state.products;
    updatedBasket.push(product);

    updatePrice(updatedBasket);

    dispatch({
      type: ADD,
      payload: updatedBasket,
    });
  }
  function removeFromBasket(product) {
    const updatedBasket = state.products.filter((item) => {
      return item.name !== product.name;
    });

    updatePrice(updatedBasket);

    dispatch({
      type: REMOVE,
      payload: updatedBasket,
    });
  }
  function updatePrice(products) {
    let total = 0;

    products.forEach((product) => {
      total += product.price * product.qty;
    });

    dispatch({
      type: UPDATE_PRICE,
      payload: total,
    });
  }

  function incrementQty(product) {
    const updatedBasket = state.products.map((item) => {
      if (item.name === product.name) {
        product.qty++;
      }
      return item;
    });

    updatePrice(updatedBasket);

    dispatch({
      type: INCREMENT,
      payload: updatedBasket,
    });
  }
  function decrementQty(product) {
    const updatedBasket = state.products.map((item) => {
      if (item.name === product.name && item.qty !== 1) {
        product.qty--;
      }
      return item;
    });

    updatePrice(updatedBasket);

    dispatch({
      type: DECREMENT,
      payload: updatedBasket,
    });
  }

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
    incrementQty,
    decrementQty,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { GlobalState, GlobalContext };
