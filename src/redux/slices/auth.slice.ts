import { RootState } from "../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { history } from "../../utils/helper-router";
import storage from "redux-persist/lib/storage";

interface AuthState {
  accessToken: string;
  type: string;
  user: User | null;
}

const initialState: AuthState = {
  accessToken: "",
  type: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ accessToken: string; type: string }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.type = action.payload.type;
    },
    logout: (state, action: PayloadAction) => {
      state.user = null;
      state.type = "";
      state.accessToken = "";
      history.navigate("/");
    },
  },
  extraReducers(builder) {},
});

const authPersistConfig = {
  key: "auth",
  storage,
};

const authReducer = authSlice.reducer;
export const authSelector = (state: RootState) => state.auth;
export const useUser = () => useSelector((state: RootState) => state.auth.user);
export const { login, logout } = authSlice.actions;
export { authReducer, authPersistConfig };
