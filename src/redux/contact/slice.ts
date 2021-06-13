import { createSlice } from "@reduxjs/toolkit";
import { fetchContactByIdAsync, fetchContactsAsync } from "./thunk";
import { ContactState } from "./types";

const initialState: ContactState = {
  contacts: [],
  status: "idle",
  statusDetails: "idle",
  isContactsFetched: false,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsAsync.pending, (state) => {
        state.status = "loading";
        state.isContactsFetched = false;
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.contacts = action.payload;
        state.isContactsFetched = true;
      })
      .addCase(fetchContactsAsync.rejected, (state) => {
        state.status = "failed";
        state.isContactsFetched = false;
      })
      .addCase(fetchContactByIdAsync.pending, (state) => {
        state.statusDetails = "loading";
      })
      .addCase(fetchContactByIdAsync.fulfilled, (state, action) => {
        state.statusDetails = "idle";
        state.contactDetails = action.payload;
      })
      .addCase(fetchContactByIdAsync.rejected, (state) => {
        state.statusDetails = "failed";
        state.contactDetails = undefined;
      });
  },
});

export { contactSlice };
