import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice/AuthSlice";
import appReducer from "./slices/appSlice/AppSlice"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "app"],
};

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedData: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"]
      },
    }),
});

export const persistor = persistStore(store);



