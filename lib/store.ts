import { create as add } from "zustand";
import { navbarItems } from "../constants";

const initialStates: Record<string, boolean> = {
  settings: false,
};
navbarItems.map((item) => (initialStates[item.title] = false));

type task = {
  id: number;
  icon: string;
  title: string;
  duration: number;
  bDuration: number;
  completed: boolean;
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
  completeTask: (id:number)=>void;
  addTask: (task: task) => void;
  rmTask: (id: number) => void;
  upTask: (newTask:task)=>void;
  setCTask: (id:number)=>void;
};

// TODO: remove this ===========
let tasks:task[] = [
  {
    id: 0,
    icon: "🏈",
    title: "Football",
    completed: false,
    duration: 30,
    bDuration: 30,
  },
  {
    id: 3,
    icon: "🏈",
    title: "Football 3",
    completed: false,
    duration: 30,
    bDuration: 30,
  },
  {
    id: 4,
    icon: "🏈",
    title: "Football 4",
    completed: false,
    duration: 30,
    bDuration: 30,
  },
  {
    id: 5,
    icon: "🏈",
    title: "Football 5",
    completed: false,
    duration: 30,
    bDuration: 30,
  },
  {
    id: 6,
    icon: "🏈",
    title: "Football 6",
    completed: false,
    duration: 30,
    bDuration: 30,
  },
  {
    id: 7,
    icon: "🏈",
    title: "Football 7",
    completed: false,
    duration: 30,
    bDuration: 30,
  },
  {
    id: 8,
    icon: "🏈",
    title: "Football 8",
    completed: false,
    duration: 30,
    bDuration: 30,
  },
  {
    id: 24,
    icon: "📚",
    completed: true,
    title: "Unit 2 | part 1",
    duration: 45,
    bDuration: 45,
  },
  {
    id: 366,
    icon: "📚",
    completed: true,
    title: "Unit 2 | part 1",
    duration: 45,
    bDuration: 45,
  },
  {
    id: 402,
    icon: "📚",
    completed: true,
    title: "Unit 2 | part 1",
    duration: 45,
    bDuration: 45,
  },
  {
    id: 75,
    icon: "📚",
    completed: true,
    title: "Unit 2 | part 1",
    duration: 45,
    bDuration: 45,
  },
  {
    id: 32,
    icon: "📚",
    completed: true,
    title: "Unit 2 | part 1",
    duration: 45,
    bDuration: 45,
  },
  {
    id: 46,
    icon: "📚",
    completed: true,
    title: "Unit 2 | part 1",
    duration: 45,
    bDuration: 45,
  },
  {
    id: 53,
    icon: "📚",
    completed: true,
    title: "Unit 2 | part 1",
    duration: 45,
    bDuration: 45,
  },
  {
    id: 2,
    icon: "🖥",
    completed: false,
    isCurrent:false,
    title: "Finish tasks section in workflow time app",
    duration: 90,
    bDuration: 90,
  }
]
//! ============================

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
  tasks: tasks,
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  completeTask: (id)=> set((state)=>({tasks:state.tasks.filter((task)=> {if(task.id === id)  {task.completed = true; task.isCurrent = false;}; return state.tasks})})),
  rmTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  upTask: (newTask)=> set((state)=>({tasks:state.tasks.filter((task)=> {if(task.id === newTask.id)  {task = newTask}; return state.tasks})})),
  setCTask: (id)=> set((state)=>({tasks:state.tasks.filter((task)=> {if(task.id === id)  {task.isCurrent = true;state.workflowInMinutes = task.duration;state.breakInMinutes = task.bDuration}else{task.isCurrent = false}; return state.tasks})})),
}));