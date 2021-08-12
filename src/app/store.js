import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { indexApi } from "../api/indexApi";

const store = configureStore({
  reducer: {
    [indexApi.reducerPath]: indexApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(indexApi.middleware),
});

setupListeners(store.dispatch);

export default store;
