import { FaTasks } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";


type navbarItemsType = {
    title? : string,
    link
? : string,
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
const navbarLinks:navbarItemsType = [
    {
        link:"tasks",
        color:"#3bd13b",
        icon:FaTasks,
    }
]

const langs = [
    {
        icon:"🇸🇦",
        title:"اللغة العربية",
        locale:"ar"
    },
    {
        icon:"🇬🇧",
        title:"English",
        locale:"en"
    },
]

export {navbarItems,langs,navbarLinks}