//ok so increase bear is a function in this there is another funtion called set function it is zustand fuction which contain state which is use to perform task on psecific varable
//So increaseBears is a function. Inside that, we use the set function (from Zustand). That set function takes the current state, and updates the bears variable

import type { StateCreator } from "zustand";

type userState = {
  fullName: string;
  userName: string;
  address: string;
  age: number;
};

type userAction = {
  setAddress: (address: string) => void;
};

export type UserSlice = userState & userAction;
//In Zustand, stateCreator  is the function you define to create and initialize your store's state.
//in easy wording there is many function in app like userinfo cart etc use make multiple stateCreator of those and add all in store file so this is use to divide the functionality in chunks
export const userActionStore: StateCreator<
  UserSlice,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  address: "",
  fullName: "",
  userName: "",
  age: 0,
  setAddress: (address) =>
    set((state) => {
      state.address = address;
    }),
});
