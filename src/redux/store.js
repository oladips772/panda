/** @format */
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
