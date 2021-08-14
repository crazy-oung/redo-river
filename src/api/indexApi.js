import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const indexApi = createApi({
  reducerPath: "indexApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.hangang.in" }),
  endpoints: (build) => ({
    getRecommendedLectureResourcesLimit10: build.query({
      query: () => `lecture-banks?limit=10&order=hits&page=1`,
    }),
    getRecommendedLectureResources: build.query({
      query: () => `lecture-banks/hit`,
    }),
    getLectureRankingByLecture: build.query({
      query: (departmentId) =>
        `lectures?departmentId=${departmentId}&limit=5&page=1&sort=평점순`,
    }),
  }),
});

export const {
  useGetRecommendedLectureResourcesLimit10Query,
  useGetRecommendedLectureResourcesQuery,
  useGetLectureRankingByLectureQuery,
} = indexApi;
