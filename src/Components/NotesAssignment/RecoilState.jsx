import { atom } from "recoil";

export const NoteList = atom({
  key: "NoteList",
  default: [],
});

export const NoteIndex = atom({
  key: "NoteIndex",
  default: 0,
});
