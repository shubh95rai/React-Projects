import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    productSlice: productReducer,
  },
});

export default store