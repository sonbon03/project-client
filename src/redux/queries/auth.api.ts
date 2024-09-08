import { createApi } from "@reduxjs/toolkit/query/react";
import { customFetchBase } from "./customFetchBase";

const BASE = "http://localhost:8000/api/api/users";

export const authApi = createApi({
  reducerPath: "authApi",
  keepUnusedDataFor: 10,
  baseQuery: customFetchBase,
  endpoints(builder) {
    return {
      login: builder.mutation<
        Response<{
          accessToken: string;
          type: string;
          expriresIn: number;
        }>,
        LoginInput
      >({
        query: (params) => ({
          url: `${BASE}/signin`,
          method: "POST",
          body: params,
        }),
        transformErrorResponse(response, meta, arg) {
          return response.data;
        },
      }),
      register: builder.mutation<Response<null>, RegisterInput>({
        query: (params) => ({
          url: `${BASE}/signup`,
          method: "POST",
          body: {
            email: params.email,
            password: params.password,
            phone: params.phone,
            name: params.name,
          },
        }),
        transformErrorResponse(response, meta, arg) {
          return response.data;
        },
      }),
    };
  },
});

export const { useLoginMutation, useRegisterMutation } = authApi;
