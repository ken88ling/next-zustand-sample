// store.js

import { create } from "zustand";

const useStore = create((set) => ({
  selectedDate: new Date(),
  data: null,
  fetchData: async (date) => {
    const response = await fetch(`http://localhost:3000/api/product?date=${date}`);
    const data = await response.json();
    set({ data });
  },
  setSelectedDate: (date) => set({ selectedDate: date }),
}));

export { useStore };
