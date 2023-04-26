import Countdown from "@/components/Countdown";
import { useAppStore } from "../../lib/store";
import Navbar from "@/components/Navbar";


export default function Home() {
  const { isDark, workflowInMinutes, breakInMinutes } = useAppStore();

  return (
    <main className={`${isDark && "dark"}`}>
      <div className="w-screen h-screen flex flex-col bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200">
        <Countdown
          workflowInMinutes={workflowInMinutes}
          breakInMinutes={breakInMinutes}
        />
        <Navbar />
      </div>
    </main>
  );
}
