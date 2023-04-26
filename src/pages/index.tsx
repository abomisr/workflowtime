import Countdown from "@/components/Countdown";
import ThemeToggle from "@/components/btns/ThemeToggle";
import { useAppStore } from "../../lib/store";

export default function Home() {
  const {isDark} = useAppStore();

  return (
    <main className={`${isDark && "dark"} h-screen w-screen overflow-hidden`}>
      <div className="w-full h-full bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200">
        <ThemeToggle />
        <Countdown durationInMinutes={0.1} breakInMinutes={0.1} />
      </div>
    </main>
  );
}
