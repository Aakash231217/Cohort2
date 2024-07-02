import {atomFamily} from "recoil";
import {atom} from "recoil"
import {TODOS} from "./todo.js";

export const todosAtomFamily = atomFamily({
    key:'todosAtomFamily',
    default:id=>{
        return TODOS.find(x=>x.id===id)
    }
})

const todoAtom = atom({
    key:"todoAtom",
    default:1,
})