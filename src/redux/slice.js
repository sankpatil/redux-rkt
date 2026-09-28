import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");
const initialState = {
  products: savedCart ? JSON.parse(savedCart) : []

};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    addItem: (state, action) => {
      // state.products.push(action.payload);


      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      )
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1
        })
      }
      localStorage.setItem("cart", JSON.stringify(state.products))
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart",JSON.stringify(state.products))
    },
    clearItem: (state, action) => {
      state.products = []
      localStorage.setItem("cart",JSON.stringify(state.products))
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      )
      if (product) {
        product.quantity += 1
      }
      localStorage.setItem("cart",JSON.stringify(state.products))
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      )
      if (product && product.quantity > 1) {
        product.quantity -= 1
      }
      localStorage.setItem("cart",JSON.stringify(state.products))
    }

  }
});

export const { addItem, removeItem, clearItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;