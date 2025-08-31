/**
 * API (https://openlibrary.org/)
 */

export interface BookAPISearchResult {
  documentation_url: string;
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: number | null;
  q: string;
  start: number;
  docs: BookAPISearchResultItem[];
}

export interface BookAPISearchResultItem {
  author_key: string[];
  author_name: string[];
  cover_i: number;
  edition_count: number;
  first_publish_year: number;
  key: string;
  language: string[];
  title: string;
  subtitle?: string;
}
