import type { CartSlice } from "@/store/card-slice";
import type { UserSlice } from "@/store/user-slice";

export type Store = UserSlice & CartSlice;
