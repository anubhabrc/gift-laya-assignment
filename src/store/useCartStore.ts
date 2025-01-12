import { create } from "zustand";

type Store = {
  cartValue: number;
  setCartValue: (val: number) => void;
};

export const useCartStore = create<Store>()((set) => ({
  cartValue: 0,
  setCartValue: (val) => set(() => ({ cartValue: val })),
}));
