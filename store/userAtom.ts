import { atom, selector } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: selector({
    key: "userSelector",
    get: async () => {
      const data = await fetch("/api/me").then((res) => res.json());
      return data;
    },
  }),
});
