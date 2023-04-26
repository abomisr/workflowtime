import { RiSettingsFill } from "react-icons/ri";
import { GiDuration } from "react-icons/gi";

import ThemeToggle from "./btns/ThemeToggle";
import { useAppStore } from "../../lib/store";
import DurationInputs from "@/components/DurationInputs";

const Navbar = () => {
  const { handleClick, isClicked,closeAllClicked } = useAppStore();

  return (
    <>
      {isClicked.durations && <DurationInputs />}
      {isClicked.settings && (
        <>
          <div
            id="navbar"
            className="fixed bottom-[90px] right-3 p-3  drop-shadow-sm z-[1000] bg-second-light dark:bg-second-dark rounded-2xl flex items-center justify-center gap-7 flex-col"
          >
            <ThemeToggle />
            <button onClick={()=>handleClick("durations")} className="p-2.5 drop-shadow-md text-[28px] bg-sky-600 text-white rounded-full">
              <GiDuration />
            </button>
          </div>
        </>
      )}
      <button
        onClick={()=>handleClick("settings")}
        className={`fixed right-5 bottom-5 z-[1001] ${
          isClicked.settings && "rotate-[135deg]"
        } transition-all duration-400 p-4 bg-second-light dark:bg-second-dark rounded-full drop-shadow-md`}
      >
        <RiSettingsFill className="text-[22px]" />
      </button>
      {(isClicked.durations || isClicked.settings) &&
      <span onClick={closeAllClicked} className="block backdrop-blur-sm w-screen h-screen absolute top-0"></span>
      }
    </>
  );
};

export default Navbar;
