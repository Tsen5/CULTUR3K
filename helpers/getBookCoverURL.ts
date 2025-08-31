export type BookCoverSize = "L" | "M" | "S";

export const getBookCoverURL = (cover_i: number, size: BookCoverSize = "M") =>
  `https://covers.openlibrary.org/b/id/${cover_i}-${size}.jpg`;
