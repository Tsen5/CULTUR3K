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

export interface BookAPIWorkInfo {
  key: string;
  title: string;
  covers: number[];
  authors: WorkAuthor[];
  created: WorkTypedValue;
  last_modified: WorkTypedValue;
  type: {
    key: string;
  };
  subtitle?: string;
  description?: string;
  links?: WorkLink[];
  subject_places?: string[];
  subject_people?: string[];
  subject_times?: string[];
  subjects?: string[];
  first_sentence?: WorkTypedValue;
  first_publish_date: string;
  revision: number;
}

export interface WorkTypedValue {
  type: string;
  value: string;
}

export interface WorkLink {
  title: string;
  url: string;
  type: {
    key: string;
  };
}

export interface WorkAuthor {
  author: {
    key: string;
  };
  type: {
    key: string;
  };
}
