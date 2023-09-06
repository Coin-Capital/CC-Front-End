import { create } from "zustand";

interface switchPageType {
  page: string;
  switchToDashboard: (switchPage: string) => void;
}

const switchPage = create<switchPageType>()((set) => ({
  page: "",
  switchToDashboard: () =>
    set((state) => ({ page: (state.page = "dashboard") })),
}));
