import Countdown from "@/components/Countdown";
import { useAppStore } from "../../lib/store";
import Navbar from "@/components/Navbar";
import { RiSettingsFill } from "react-icons/ri";

// import DurationInputs from "@/components/DurationInputs";
// <DurationInputs />


export default function Home() {
  const { isDark, workflowInMinutes, breakInMinutes,isSettingsShown,toggleSettingsStatus } = useAppStore();

  return (
    <main className={`${isDark && "dark"}`}>
      <div className="w-screen h-screen flex flex-col bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200">
        <Countdown
          workflowInMinutes={workflowInMinutes}
          breakInMinutes={breakInMinutes}
        />
        {isSettingsShown && <Navbar />}
        <button onClick={toggleSettingsStatus} className="hover:rotate-90 active:scale-90 transition-all duration-400 fixed right-5 bottom-5 p-4 bg-second-light dark:bg-second-dark rounded-full drop-shadow-md">
          <RiSettingsFill className="text-[22px]" />
        </button>
      </div>
    </main>
  );
}
