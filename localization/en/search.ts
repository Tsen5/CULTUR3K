import { MediaType } from "@/types/list";

export default {
  placeholder: {
    search: "Search...",
  },
  mediaType: {
    [`${MediaType.MOVIE}_one`]: "Film",
    [`${MediaType.MOVIE}_other`]: "Films",
    [`${MediaType.VIDEO_GAME}_one`]: "Video game",
    [`${MediaType.VIDEO_GAME}_other`]: "Video games",
    [`${MediaType.BOOK}_one`]: "Book",
    [`${MediaType.BOOK}_other`]: "Books",
  },
  alt: {
    [MediaType.MOVIE]: 'Poster of "{{title}}"',
    [MediaType.VIDEO_GAME]: 'Cover of "{{title}}"',
    [MediaType.BOOK]: 'Cover of "{{title}}"',
  },
  separator: {
    dot: "∙",
  },
};
