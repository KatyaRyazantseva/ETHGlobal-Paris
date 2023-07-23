import { create } from "zustand";


export const useAddressStore = ((set) => ({
  address: "",

  setAddress: () => {
    set((state) => ...state,
    );
  },
}));
