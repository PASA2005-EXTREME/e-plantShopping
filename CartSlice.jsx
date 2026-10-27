import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],          // [{ id, name, price, image, quantity }]
    addedIds: [],       // track which plant IDs have been added (to disable buttons)
  },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find((i) => i.id === plant.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
        state.addedIds.push(plant.id);
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      state.addedIds = state.addedIds.filter((aid) => aid !== id);
    },

    increaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove item if quantity hits 0
          state.items = state.items.filter((i) => i.id !== action.payload);
          state.addedIds = state.addedIds.filter((aid) => aid !== action.payload);
        }
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectAddedIds = (state) => state.cart.addedIds;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);

export default cartSlice.reducer;
