import { create } from "zustand";

type FormLoadingState = {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
};

export const useFormLoading = create<FormLoadingState>((set) => ({
  isLoading: false,
  setLoading: (value: boolean) => set({ isLoading: value }),
}));
