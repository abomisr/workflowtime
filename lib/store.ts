import { create as add } from 'zustand'


type AppStoreState = {
    isDark:boolean;
    toggleDark:()=>void;
    workflowInMinutes:number;
    setWorkflowInMinutes:(duration: number)=>void;
    breakInMinutes:number;
    setBreakInMinutes:(duration: number)=>void;
    isSettingsShown:boolean;
    toggleSettingsStatus:()=>void;
}

export const useAppStore = add<AppStoreState>()(set => ({
  isDark: false,
  toggleDark: () => set((state) => ({ isDark: !state.isDark })),
  workflowInMinutes:25,
  setWorkflowInMinutes:(duration)=> set(()=>({workflowInMinutes: duration})),
  breakInMinutes:5,
  setBreakInMinutes:(duration)=> set(()=>({breakInMinutes: duration})),
  isSettingsShown: false,
  toggleSettingsStatus: ()=> set((state)=>({isSettingsShown: !state.isSettingsShown}))
}))


