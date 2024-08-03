import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  products: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

const getProducts = createAsyncThunk("productSlice/getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export { getProducts };
export default productSlice.reducer;
