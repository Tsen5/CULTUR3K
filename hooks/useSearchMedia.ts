import { booksAPI } from "@/api/books";
import { moviesAPI } from "@/api/movies";
import { videoGamesAPI } from "@/api/videoGames";
import { MediaType } from "@/types/list";
import { SearchResult } from "@/types/search";
import Fuse, { IFuseOptions } from "fuse.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface UseSearchMediaProps {
  query: string;
  types?: MediaType[];
}

const DEFAULT_TYPES: MediaType[] = [];

const fuseOptions: IFuseOptions<SearchResult> = {
  includeScore: true,
  ignoreLocation: true,
  threshold: 1,
  keys: ["name"],
};

const useSearchMedia = ({
  query,
  types = DEFAULT_TYPES,
}: UseSearchMediaProps) => {
  const [result, setResult] = useState<SearchResult<MediaType>[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const searchDebounce = useRef<ReturnType<typeof setTimeout>>(null);
  const moviesController = useRef<AbortController>(null);
  const booksController = useRef<AbortController>(null);
  const videoGamesController = useRef<AbortController>(null);

  const parsedQuery = useMemo(() => query.trim(), [query]);

  const searchVideoGames = useCallback(async (value: string) => {
    if (videoGamesController.current) {
      videoGamesController.current.abort();
    }
    videoGamesController.current = new AbortController();
    try {
      const { data } = await videoGamesAPI.searchVideoGames(value, {
        signal: videoGamesController.current.signal,
      });
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  }, []);

  const searchMovies = useCallback(async (value: string) => {
    if (moviesController.current) {
      moviesController.current.abort();
    }
    moviesController.current = new AbortController();
    try {
      const { data } = await moviesAPI.searchMovies(value, {
        signal: moviesController.current.signal,
      });
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  }, []);

  const searchBooks = useCallback(async (value: string) => {
    if (booksController.current) {
      booksController.current.abort();
    }
    booksController.current = new AbortController();
    try {
      const { data } = await booksAPI.searchBooks(value, {
        signal: booksController.current.signal,
      });
      return data.docs;
    } catch (error) {
      console.error(error);
      return [];
    }
  }, []);

  const handleSearch = useCallback(async () => {
    setIsSearching(true);
    if (parsedQuery.length === 0) {
      setResult([]);
      setIsSearching(false);
      return;
    }

    let newResult: SearchResult<MediaType>[] = [];

    const [videoGames, movies, books] = await Promise.all([
      types.length === 0 || types.includes(MediaType.VIDEO_GAME)
        ? searchVideoGames(parsedQuery)
        : [],
      types.length === 0 || types.includes(MediaType.MOVIE)
        ? searchMovies(parsedQuery)
        : [],
      types.length === 0 || types.includes(MediaType.BOOK)
        ? searchBooks(parsedQuery)
        : [],
    ]);

    newResult = [
      ...videoGames.map<SearchResult<MediaType.VIDEO_GAME>>((videoGame) => ({
        id: `${MediaType.VIDEO_GAME}_${videoGame.id.toString()}`,
        name: videoGame.name,
        type: MediaType.VIDEO_GAME,
        content: videoGame,
      })),
      ...movies.map<SearchResult<MediaType.MOVIE>>((movie) => ({
        id: `${MediaType.MOVIE}_${movie.id.toString()}`,
        name: movie.title,
        type: MediaType.MOVIE,
        content: movie,
      })),
      ...books.map<SearchResult<MediaType.BOOK>>((book) => ({
        id: `${MediaType.BOOK}_${book.key}`,
        name: book.title,
        type: MediaType.BOOK,
        content: book,
      })),
    ];

    const sortedResult = new Fuse(newResult, fuseOptions)
      .search(parsedQuery)
      .map((item) => item.item);

    setResult(sortedResult);
    setIsSearching(false);
  }, [parsedQuery, types, searchVideoGames, searchMovies, searchBooks]);

  useEffect(() => {
    if (searchDebounce.current) {
      clearTimeout(searchDebounce.current);
    }

    searchDebounce.current = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => {
      if (searchDebounce.current) {
        clearTimeout(searchDebounce.current);
      }
      if (moviesController.current) {
        moviesController.current.abort();
      }
      if (booksController.current) {
        booksController.current.abort();
      }
      if (videoGamesController.current) {
        videoGamesController.current.abort();
      }
    };
  }, [handleSearch]);

  return { result, isSearching };
};

export default useSearchMedia;
