import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactService } from "../../api/ContactService";

const fetchContactsAsync = createAsyncThunk(
  "contact/fetchContactsAsync",
  async () => {
    const response = await ContactService.fetchContactsAsync();
    return response.data;
  }
);

const fetchContactByIdAsync = createAsyncThunk(
  "contact/fetchContactByIdAsync",
  async (id: string) => {
    const response = await ContactService.fetchContactByIdAsync(id);
    return response.data;
  }
);

export { fetchContactsAsync, fetchContactByIdAsync };
