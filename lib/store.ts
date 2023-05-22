import { create as add } from "zustand";
import { navbarItems } from "../constants";

const initialStates: Record<string, boolean> = {
  settings: false,
};
navbarItems.map((item) => (initialStates[item.title] = false));

type task = {
  id: number;
  title: string;
  duration: number;
  bDuration: number;
  completed: boolean;
  priority: string;
  icon?: string;
  isCurrent?: boolean;
};

type AppStoreState = {
  isDark: boolean;
  toggleDark: () => void;
  workflowInMinutes: number;
  setWorkflowInMinutes: (duration: number) => void;
  breakInMinutes: number;
  setBreakInMinutes: (duration: number) => void;
  isClicked: Record<string, boolean>;
  closeAllClicked: () => void;
  handleClick: (clicked: string) => void;
  initialStates: Record<string, boolean>;
  started: boolean;
  setStarted: (setTo: boolean) => void;
  tasks: task[];
  setTasks: (newTasks: task[]) => void;
  completeTask: (id: number) => void;
  addTask: (task: task) => void;
  rmTask: (id: number) => void;
  upTask: (newTask: task) => void;
  setCTask: (id: number) => void;
  rmCompletedTasks: () => void;
};


export const useAppStore = add<AppStoreState>()((set) => ({
  isDark: false,
  toggleDark: () => set((state) => ({ isDark: !state.isDark })),
  workflowInMinutes: 25,
  setWorkflowInMinutes: (duration) =>
    set(() => ({ workflowInMinutes: duration })),
  breakInMinutes: 5,
  setBreakInMinutes: (duration) => set(() => ({ breakInMinutes: duration })),
  isClicked: initialStates,
  handleClick: (clicked: string) =>
    set((state) => ({
      isClicked: { ...initialStates, [clicked]: !state.isClicked[clicked] },
    })),
  closeAllClicked: () => set(() => ({ isClicked: initialStates })),
  initialStates: initialStates,
  started: false,
  setStarted: (setTo) => set(() => ({ started: setTo })),
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  setTasks: (newTasks) => set(() => ({ tasks: newTasks })),
  completeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => {
        if (task.id === id) {
          task.completed = true;
          task.isCurrent = false;
        }
        return state.tasks;
      }),
    })),
  rmTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  rmCompletedTasks: () =>
    set((state) => ({ tasks: state.tasks.filter((task) => !task.completed) })),
  upTask: (newTask) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => {
        if (task.id === newTask.id) {
          task = newTask;
        }
        return state.tasks;
      }),
    })),
  setCTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => {
        if (task.id === id) {
          task.isCurrent = true;
          state.workflowInMinutes = task.duration;
          state.breakInMinutes = task.bDuration;
        } else {
          task.isCurrent = false;
        }
        return state.tasks;
      }),
    })),
}));
