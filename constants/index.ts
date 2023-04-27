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

export {navbarItems,langs}