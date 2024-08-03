import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state.products.findIndex((product) => {
          return product.id === action.payload.id;
        }) === -1
      ) {
        const product = { ...action.payload, qty: 1 };
        state.products.push(product);
      } else {
        const updatedProducts = state.products.map((product) => {
          return product.id === action.payload.id
            ? { ...product, qty: product.qty + 1 }
            : product;
        });
        return { ...state, products: updatedProducts };
      }
    },
    removeFromCart: (state, action) => {
      const updatedProducts = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });

      return { ...state, products: updatedProducts };
    },
    incrementQty: (state, action) => {
      const updatedProducts = state.products.map((product) => {
        return product.id === action.payload.id
          ? { ...product, qty: product.qty + 1 }
          : product;
      });

      return { ...state, products: updatedProducts };
    },

    decrementQty: (state, action) => {
      const updatedProducts = state.products.map((product) => {
        return product.id === action.payload.id
          ? { ...product, qty: product.qty - 1 }
          : product;
      });

      return { ...state, products: updatedProducts };
    },

    totalItemsMethod: (state, action) => {
      const newTotalItems = state.products.reduce((acc, curr) => {
        return acc + curr.qty;
      }, 0);

      return { ...state, totalItems: newTotalItems };
    },

    totalAmountMethod: (state, action) => {
      const newTotalAmount = state.products.reduce((acc, curr) => {
        return acc + curr.price * curr.qty;
      }, 0);

      return { ...state, totalAmount: newTotalAmount };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  totalAmountMethod,
  totalItemsMethod,
} = cartSlice.actions;
export default cartSlice.reducer;
