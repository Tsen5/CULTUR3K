import { booksAPI } from "@/api/books";
import { moviesAPI } from "@/api/movies";
import { videoGamesAPI } from "@/api/videoGames";
import { useCallback, useEffect } from "react";
import { View } from "react-native";

export default function HomeScreen() {
  const searchMovies = useCallback(async () => {
    try {
      const { data } = await moviesAPI.searchMovies("batman");
      console.log(data);
      if (data.results.length > 0) {
        const { data: movie } = await moviesAPI.getMovie(data.results[0].id);
        console.log(movie);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const searchVideogames = useCallback(async () => {
    try {
      const { data } = await videoGamesAPI.searchVideoGames("batman");
      console.log(data);
      if (data.results.length > 0) {
        const { data: videoGame } = await videoGamesAPI.getVideoGame(
          data.results[0].id,
        );
        console.log(videoGame);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const searchBooks = useCallback(async () => {
    try {
      const { data } = await booksAPI.searchBooks("batman");
      console.log(data);
      if (data.docs.length > 0) {
        const { data: book } = await booksAPI.getWork(data.docs[0].key);
        console.log(book);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    searchMovies();
    searchVideogames();
    searchBooks();
  }, [searchMovies, searchVideogames, searchBooks]);

  return <View>Hello there</View>;
}
