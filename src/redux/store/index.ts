import { authApi } from "../queries/auth.api";
import { actionReducer } from "../slices/action.slice";
import { authPersistConfig, authReducer } from "../slices/auth.slice";
import { userPersistConfig, userReducer } from "../slices/user.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  action: actionReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const middlewares = [authApi.middleware];
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
});

export const wrapperPersistStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
