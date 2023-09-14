import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StateBook, Book } from "../../models/books";

import bookService from "../../services/bookService";

const initialState: StateBook = {
  info: {
    id: "",
    volumeInfo: {
      title: "",
      authors: [],
      imageLinks: {
        small: "",
      },
      description: "",
      categories: [],
    },
  },
  loadingStatus: "idle",
};

export const fetchBook = createAsyncThunk<Book, string | undefined>(
  "book/fetchBook",
  async (id) => {
    const { getBook } = bookService();
    const res = await getBook(id);
    return res;
  }
);

const bookPageSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.info = action.payload;
      })
      .addCase(fetchBook.rejected, (state) => {
        state.loadingStatus = "error";
      });
  },
});

const { reducer } = bookPageSlice;
export default reducer;
