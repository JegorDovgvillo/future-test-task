import { configureStore } from "@reduxjs/toolkit";

import mainPage from "../components/mainPage/mainPageSlice";
import book from "../components/bookPage/bookPageSlice";

const store = configureStore({
  reducer: { mainPage, book },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
