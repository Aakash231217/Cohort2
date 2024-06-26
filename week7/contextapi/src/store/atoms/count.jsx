import {atom} from "recoil";

export const countAtom = atom({
    key:"countAtom",
    default:0,
});

const todoAtom = atom({
    key:"todoAtom",
    default:0,
})


export const evenSelector = selector({
    key:"evenSelector",
    get:(props)=>{
    const count = props.get(countAtom);
    return count%2;
    }
});


//Todo creation application with filtering logic
//todos,filter

export const filterTodos = selector({
    key:"filteredTodos",
    get:(props)=>{
        const todos = props.get(todoAtom);
        const filter = props.get(filterAtom);
        return todos.filter(x=>x.title.includes(filter) || x.description.includes("filter"));
    }
})