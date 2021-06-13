import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contact";

export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
