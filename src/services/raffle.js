import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rafffleApi = createApi({
  reducerPath: "rafffleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://raffle-form.thesovereign.co",
    timeout: 10000,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getRafffles: builder.query({
      query: () => `/getAllData`,
      providesTags: ["Post"],
    }),
    getDataByToken: builder.query({
      query: (data) => ({
        url: `/getDataByToken`,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: data,
        providesTags: ["Post"],
      }),
    }),
  }),
});

export const { useLazyGetRaffflesQuery, useLazyGetDataByTokenQuery } =
  rafffleApi;
