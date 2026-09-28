import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products?limit=12");

    const data = await response.json();

    return data.products;
  }
);

const productSlice = createSlice({
  name: "productSlice",

  initialState: {
    product: [],
    status: "idle",
    error: null
  },

  extraReducers: (builder) => {
    builder

      // API started
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      // API successful
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })

      // API failed
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;