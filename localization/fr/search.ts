import { MediaType } from "@/types/list";

export default {
  placeholder: {
    search: "Rechercher...",
  },
  mediaType: {
    [`${MediaType.MOVIE}_one`]: "Film",
    [`${MediaType.MOVIE}_other`]: "Films",
    [`${MediaType.VIDEO_GAME}_one`]: "Jeux vidéo",
    [`${MediaType.VIDEO_GAME}_other`]: "Jeux vidéos",
    [`${MediaType.BOOK}_one`]: "Livre",
    [`${MediaType.BOOK}_other`]: "Livres",
  },
  alt: {
    [MediaType.MOVIE]: "Affiche de « {{title}} »",
    [MediaType.VIDEO_GAME]: "Jaquette de « {{title}} »",
    [MediaType.BOOK]: "Couverture de « {{title}} »",
  },
  separator: {
    dot: "∙",
  },
};
