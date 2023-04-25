import { configureStore } from "@reduxjs/toolkit";
import { rafffleApi } from "./raffle";

export const store = configureStore({
  reducer: {
    [rafffleApi.reducerPath]: rafffleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rafffleApi.middleware),
});
