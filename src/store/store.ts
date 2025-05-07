//ok so increase bear is a function in this there is another funtion called set function it is zustand fuction which contain state which is use to perform task on psecific varable
//So increaseBears is a function. Inside that, we use the set function (from Zustand). That set function takes the current state, and updates the bears variable

import type { Store } from "@/types/store";
import { create } from "zustand";
import { userActionStore } from "./user-slice";
import { immer } from "zustand/middleware/immer";
import { cardAction } from "./card-slice";

// immer is a library that helps manage immutable state more easily, particularly when the state has nested objects.

// What does "immutable" mean?
// Immutable means that once you create an object, you cannot change it.

// Instead of changing the object directly, you have to create a new object with the updated values.

export const MyStore = create<Store>()(
  immer((...a) => ({
    ...userActionStore(...a),
    ...cardAction(...a),
  }))
);
