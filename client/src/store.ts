import { create } from "zustand";

interface yearQueryStore {
  year: number;
  setYear: (year: number) => void;
}

export const useYearQuery = create<yearQueryStore>((set) => ({
  year: new Date().getFullYear(),
  setYear: (year) =>
    set((store) => ({
      year: year,
    })),
}));
