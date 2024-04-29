import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer, locationReducer, searchReducer } from "src/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  location: locationReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
