import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MainState, CardBooks } from "../../models/books";

import bookService from "../../services/bookService";

const initialState: MainState = {
  totalIndex: 0,
  elems: [],
  loadingStatus: "idle",
  startIndex: 0,
};

export const fetchAllBooks = createAsyncThunk<
  CardBooks[],
  { str?: string; orderBy?: string; category?: string }
>("catalogMain/fetchCatalogMain", async (arg) => {
  try {
    const { getAllBooks } = bookService();
    const res = await getAllBooks(arg);
    return res.items;
  } catch (e) {
    throw new Error("Что-то пошло не так");
  }
});

export const loadMore = createAsyncThunk<
  CardBooks[],
  { str?: string; orderBy?: string; category?: string; startIndex?: number }
>("mainPage/loadMore", async (arg) => {
  try {
    const { getAllBooks } = bookService();
    const res = await getAllBooks(arg);
    return res.items;
  } catch {
    throw new Error("Что-то пошло не так");
  }
});

export const getTotalBooks = createAsyncThunk<
  number,
  { str?: string; orderBy?: string; category?: string; startIndex?: number }
>("mainPage/getTotalBooks", async (arg) => {
  try {
    const { getAllBooks } = bookService();
    const res = await getAllBooks(arg);
    return res.totalItems;
  } catch (e) {
    throw new Error("Что-то пошло не так");
  }
});

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.startIndex = 30;
        state.elems = action.payload;
      })
      .addCase(fetchAllBooks.rejected, (state) => {
        state.loadingStatus = "error";
      })
      .addCase(loadMore.pending, (state) => {
        state.loadingStatus = "loadingMore";
      })
      .addCase(loadMore.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.startIndex += 30;
        if (action.payload) {
          state.elems = [...state.elems, ...action.payload];
        } else {
          state.loadingStatus = "max results";
          state.elems = [...state.elems];
        }
      })
      .addCase(loadMore.rejected, (state) => {
        state.loadingStatus = "error";
      })
      .addCase(getTotalBooks.fulfilled, (state, action) => {
        state.totalIndex = action.payload;
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = mainPageSlice;
export default reducer;
