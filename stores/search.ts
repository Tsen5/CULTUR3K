import { create } from "zustand";

export interface SearchState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
