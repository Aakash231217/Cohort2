import {atom} from "recoil";
import {selector} from "recoil"

export const networkAtom = atom({
    key:"networkAtom",
    default:104,
});

export const jobsAtom = atom({
    key:"jobsAtom",
    default:0,
})

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12,
})

export const messageAtom = atom({
    key:"messageAtom",
    default:0
})


//selector is derived from bunch of another atoms
export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const networkAtomAccount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messageAtomCount = get(messageAtom);
        return networkAtomAccount + jobsAtomCount + notificationsAtomCount + messageAtomCount;
    }
}) 