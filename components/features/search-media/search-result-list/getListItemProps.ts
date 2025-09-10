import { getBookCoverURL } from "@/helpers/getBookCoverURL";
import { getMoviePosterURL } from "@/helpers/getMoviePosterURL";
import { MediaType } from "@/types/list";
import {
  isBookSearchResult,
  isMovieSearchResult,
  isVideoGameSearchResult,
  SearchResult,
} from "@/types/search";
import { ListItemProps } from "./list-item/list-item";

export const getListItemProps = (item: SearchResult): ListItemProps => {
  if (isVideoGameSearchResult(item)) {
    return {
      title: item.content.name,
      date: item.content.released,
      imagePath: item.content.background_image,
      type: MediaType.VIDEO_GAME,
    };
  } else if (isMovieSearchResult(item)) {
    return {
      title: item.content.title,
      date: item.content.release_date,
      imagePath: item.content.poster_path
        ? getMoviePosterURL(item.content.poster_path)
        : null,
      type: MediaType.MOVIE,
    };
  } else if (isBookSearchResult(item)) {
    return {
      title: item.content.title,
      date: item.content.first_publish_year?.toString() ?? null,
      imagePath: item.content.cover_i
        ? getBookCoverURL(item.content.cover_i)
        : null,
      type: MediaType.BOOK,
    };
  } else {
    return { title: "", date: null, imagePath: null, type: MediaType.MOVIE };
  }
};
