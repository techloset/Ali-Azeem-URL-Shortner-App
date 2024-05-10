import { configureStore } from "@reduxjs/toolkit";
import link from "./slices/link";

const store = configureStore({
  reducer: {
    link: link,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
