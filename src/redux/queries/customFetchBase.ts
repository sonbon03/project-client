import store from "../store";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { logout } from "../slices/auth.slice";
import { message } from "antd";

const baseQuery = (token: string, type: string) =>
  fetchBaseQuery({
    baseUrl: process.env.REACT_APP_HOST,
    prepareHeaders(headers) {
      headers.set("Authorization", `${type} ${token}`);
      return headers;
    },
  });

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const state = store.getState();
  const token = state.auth.accessToken || "";
  const type = state.auth.type || "";

  let result = await baseQuery(token, type)(args, api, extraOptions);

  console.log(result);

  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  if (result.error && result.error.status === 403) {
    message.error("Bạn không có quyền truy cập");
  }

  return result;
};
