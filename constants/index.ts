import { FaTasks } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
import { MdAddTask } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { AiTwotoneHome } from "react-icons/ai";

type navbarItemsType = {
  title: string;
  link?: string;
  color: string;
  icon: typeof GiDuration;
}[];

const navbarItems: navbarItemsType = [
  {
    title: "addTask",
    color: "#25f544",
    icon: MdAddTask,
  },
  {
    title: "links",
    color: "#7a97ff",
    icon: BiLinkAlt,
  },
  {
    title: "durations",
    color: "blue",
    icon: GiDuration,
  },
  {
    title: "languages",
    color: "lightblue",
    icon: GrLanguage,
  },
];
const navbarLinks: navbarItemsType = [
  {
    link: "",
    title: "Home",
    color: "tomato",
    icon: AiTwotoneHome,
  },
  {
    link: "tasks",
    title: "Tasks",
    color: "#3bd13b",
    icon: FaTasks,
  },
];

const langs = [
  {
    icon: "🇸🇦",
    title: "اللغة العربية",
    locale: "ar",
  },
  {
    icon: "🇬🇧",
    title: "English",
    locale: "en",
  },
];


const eisMatrix = [
  {
    id: "1",
    color: "rgb(153 27 27)",
    text: "Urgent & Important"
  },
  {
    id: "2",
    color: "rgb(220 38 38)",
    text: "Not Urgent & Important"
  },
  {
    id: "3",
    color: "rgb(248 113 113)",
    text: "Urgent & Not Important"
  },
  {
    id: "4",
    color: "rgb(254 202 202)",
    text: "Not Urgent & Not Important"
  },
]

export { navbarItems, langs, navbarLinks,eisMatrix };
