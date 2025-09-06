import axios, { AxiosRequestConfig } from "axios";

import { BookAPISearchResult, BookAPIWorkInfo } from "@/types/book";

const http = axios.create({
  baseURL: "https://openlibrary.org",
});

export const booksAPI = {
  searchBooks: (query: string, config?: AxiosRequestConfig) =>
    http.get<BookAPISearchResult>("/search.json", {
      params: {
        q: query,
      },
      ...config,
    }),
  getWork: (key: string, config?: AxiosRequestConfig) =>
    http.get<BookAPIWorkInfo>(`${key}.json`, config),
};
