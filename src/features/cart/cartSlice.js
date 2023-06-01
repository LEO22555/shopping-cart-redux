import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartItems";

// Estado inicial
const initialState = {
  cartItems,
  amount: 4,
  total: 0,
};

// Creación del slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // Obtiene el id del articulo a eliminar
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItemAmount: (state, action) => {
      // Obtiene el id del articulo a incrementar
      const itemId = action.payload;
      // Busca el articulo en el carrito
      const item = state.cartItems.find((item) => item.id === itemId);
      // Incrementa la cantidad
      item.amount++;
    },
    decreaseItemAmount: (state, action) => {
      // Obtiene el id del articulo a incrementar
      const itemId = action.payload;
      // Busca el articulo en el carrito
      const item = state.cartItems.find((item) => item.id === itemId);
      // Incrementa la cantidad
      item.amount--;
    },
    calculeTotals: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalAmount += item.amount;
        totalPrice += item.price * item.amount;
      });
      state.amount = totalAmount;
      state.total = totalPrice;
    },
  },
});

export const { clearCart,
     removeItem,
     increaseItemAmount,
     decreaseItemAmount,
     calculeTotals,
    } = cartSlice.actions;
export default cartSlice.reducer;
