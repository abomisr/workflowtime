import { create as add } from 'zustand'

const initialStates = {
  settings:false,
  durations:false,
}

type initialStatesType = {settings:boolean,durations:boolean}
type AppStoreState = {
    isDark:boolean;
    toggleDark:()=>void;
    workflowInMinutes:number;
    setWorkflowInMinutes:(duration: number)=>void;
    breakInMinutes:number;
    setBreakInMinutes:(duration: number)=>void;
    isClicked:initialStatesType;
    closeAllClicked:()=>void;
    handleClick:(clicked: string)=>void;
    initialStates:initialStatesType
}

export const useAppStore = add<AppStoreState>()(set => ({
  isDark: false,
  toggleDark: () => set((state) => ({ isDark: !state.isDark })),
  workflowInMinutes:25,
  setWorkflowInMinutes:(duration)=> set(()=>({workflowInMinutes: duration})),
  breakInMinutes:5,
  setBreakInMinutes:(duration)=> set(()=>({breakInMinutes: duration})),
  isClicked: initialStates,
  handleClick: (clicked)=> set((state)=>({isClicked: {...initialStates, [clicked]:!state.isClicked[clicked]}})),
  closeAllClicked: ()=> set(()=>({isClicked: initialStates})),
  initialStates:initialStates,
}))


