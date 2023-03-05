// store.js

import { create } from "zustand";

const useStore = create(set => ({
  selectedDate: new Date(),
  data: null,
  isLoading: false,
  fetchData: async date => {
    try {
      set({ isLoading: true });
      const response = await fetch(`http://localhost:3000/api/product?date=${date}`);
      const data = await response.json();
      set({ data, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },
  setSelectedDate: date => set({ selectedDate: date }),
}));


export { useStore };
