import {atom} from "recoil";

export const countAtom = atom({
    key:"countAtom",
    default:0,
});

const todoAtom = atom({
    key:"todoAtom",
    default:0,
})