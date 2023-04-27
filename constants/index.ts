import { GiDuration } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";


type navbarItemsType = {
    title : string,
    color : string,
    icon : typeof GiDuration
}[]

const navbarItems:navbarItemsType = [
    {
        title:"durations",
        color:"blue",
        icon:GiDuration,
    },
    {
        title:"languages",
        color:"lightblue",
        icon: GrLanguage,
    },
]

export {navbarItems}