import { create as add } from 'zustand'


type AppStoreState = {
    isDark:boolean;
    toggleDark:()=>void;
}

export const useAppStore = add<AppStoreState>()(set => ({
  isDark: false,
  toggleDark: () => {set((state) => ({ isDark: !state.isDark }))},
}))


