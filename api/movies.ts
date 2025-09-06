// https://developer.themoviedb.org/reference/intro/getting-started

import axios, { AxiosRequestConfig } from "axios";

import { MovieAPIMovieInfo, MovieAPISearchResult } from "@/types/movie";

const http = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  },
});

export const moviesAPI = {
  searchMovies: (query: string, config?: AxiosRequestConfig) =>
    http.get<MovieAPISearchResult>("/search/movie", {
      params: {
        query,
      },
      ...config,
    }),
  getMovie: (id: number, config?: AxiosRequestConfig) =>
    http.get<MovieAPIMovieInfo>(`/movie/${id}`, config),
};
