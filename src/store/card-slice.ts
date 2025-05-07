import type { StateCreator } from "zustand";

export type product = {
  id: string;
  title: string;
  price: number;
};

type cartState = {
  products: (product & { quantity: number })[];
  total: number;
};

type cartAction = {
  addProduct: (product: product) => void;
  removeProduct: (productId: string) => void;
  incQuantity: (productId: string) => void;
  decQuantity: (productId: string) => void;
  getProductById: (
    productId: string
  ) => (product & { quantity: number }) | undefined;
  getTotal: (total: number) => void;
  reset: () => void;
  resetItem: (productId: string) => void;
};

const initialState: cartState = {
  products: [],
  total: 0,
};

export type CartSlice = cartState & cartAction;

export const cardAction: StateCreator<
  CartSlice,
  [["zustand/immer", never]],
  [],
  CartSlice
> = (set, get) => ({
  ...initialState,

  addProduct: (product) =>
    set((state) => {
      state.products.push({ ...product, quantity: 1 });
    }),

  removeProduct: (productId) =>
    set((state) => {
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    }),

  reset: () => set(initialState),

  incQuantity: (productId) =>
    set((state) => {
      const id = state.products.find((product) => product.id === productId);
      if (id) {
        id.quantity += 1;
      }
    }),

  decQuantity: (productId) =>
    set((state) => {
      const foundId = state.products.findIndex(
        (product) => product.id === productId
      );
      if (foundId !== -1) {
        if (state.products[foundId].quantity === 1) {
          state.products.splice(foundId, 1);
        } else {
          state.products[foundId].quantity -= 1;
        }
      }
    }),

  getProductById: (productId) =>
    get().products.find((product) => product.id === productId),

  getTotal: (total) =>
    set((state) => {
      state.total = total;
    }),

  resetItem: (productId) =>
    set((state) => {
      const data = state.products.findIndex((item) => item.id === productId);
      if (data !== -1) {
        state.products.splice(data, 1);
      }
    }),
});
