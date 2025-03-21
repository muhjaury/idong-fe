import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataSlice from "./slices/dataSlice";

const persistConfig: any = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  data: dataSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
  devTools: process.env.NEXT_PUBLIC_TYPE! !== "prod",
});

export const persistor = persistStore(store);
