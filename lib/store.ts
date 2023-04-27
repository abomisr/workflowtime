import { create as add } from 'zustand'
import { navbarItems } from "../constants";

const initialStates:Record<string,boolean> = {
  settings:false
}
navbarItems.map((item)=> initialStates[item.title] = false)


type AppStoreState = {
    isDark:boolean;
    toggleDark:()=>void;
    workflowInMinutes:number;
    setWorkflowInMinutes:(duration: number)=>void;
    breakInMinutes:number;
    setBreakInMinutes:(duration: number)=>void;
    isClicked:Record<string,boolean>;
    closeAllClicked:()=>void;
    handleClick:(clicked: string)=>void;
    initialStates:Record<string,boolean>,
    started:boolean,
    setStarted:(setTo:boolean)=>void;
    lang:string,
    setLang:(la:string)=>void;
}


export const useAppStore = add<AppStoreState>()(set => ({
  isDark: false,
  toggleDark: () => set((state) => ({ isDark: !state.isDark })),
  workflowInMinutes:25,
  setWorkflowInMinutes:(duration)=> set(()=>({workflowInMinutes: duration})),
  breakInMinutes:5,
  setBreakInMinutes:(duration)=> set(()=>({breakInMinutes: duration})),
  isClicked: initialStates,
  handleClick: (clicked:string)=> set((state)=>({isClicked: {...initialStates, [clicked]:!state.isClicked[clicked]}})),
  closeAllClicked: ()=> set(()=>({isClicked: initialStates})),
  initialStates:initialStates,
  started: false,
  setStarted: (setTo)=>set(()=>({started:setTo})),
  lang: "en",
  setLang:(la) => set(()=>({lang:la})),
}))

