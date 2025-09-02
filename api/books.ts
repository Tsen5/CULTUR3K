import axios from "axios";

import { BookAPISearchResult, BookAPIWorkInfo } from "@/types/book";

const http = axios.create({
  baseURL: "https://openlibrary.org",
});

export const booksAPI = {
  searchBooks: (query: string) =>
    http.get<BookAPISearchResult>("/search.json", {
      params: {
        q: query,
      },
    }),
  getWork: (key: string) => http.get<BookAPIWorkInfo>(`${key}.json`),
};
