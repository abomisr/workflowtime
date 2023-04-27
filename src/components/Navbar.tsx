import { RiSettingsFill } from "react-icons/ri";
import { GiDuration } from "react-icons/gi";

import ThemeToggle from "./btns/ThemeToggle";
import { useAppStore } from "../../lib/store";
import DurationInputs from "./DurationInputs";
import Languages from "./Languages";

import { navbarItems } from "../../constants";

const Navbar = () => {
  const { handleClick, isClicked, closeAllClicked } = useAppStore();

  return (
    <div className="w-screen h-screen fixed top-0 right-0 flex items-center justify-center">
      {isClicked.durations && <DurationInputs />}
      {isClicked.languages && <Languages />}
      {isClicked.settings && (
        <>
          <div
            id="navbar"
            className="fixed bottom-[90px] right-3 p-3  drop-shadow-sm z-[1000] bg-second-light dark:bg-second-dark rounded-2xl flex items-center justify-center gap-7 flex-col"
          >
            <ThemeToggle />
            {/* <button onClick={()=>handleClick("durations")} className="p-2.5 drop-shadow-md text-[28px] bg-sky-600 text-white rounded-full">
              <GiDuration />
            </button> */}
            {navbarItems.map((item) => (
              <button
                onClick={() => handleClick(item.title)}
                style={{backgroundColor:item.color}}
                className={`p-2.5 drop-shadow-md text-[28px] text-white rounded-full`}
              >
                <item.icon />
              </button>
            ))}
          </div>
        </>
      )}
      <button
        onClick={() => handleClick("settings")}
        className={`fixed right-5 bottom-5 z-[1001] ${
          isClicked.settings && "rotate-[135deg]"
        } transition-all duration-400 p-4 bg-second-light dark:bg-second-dark rounded-full drop-shadow-md`}
      >
        <RiSettingsFill className="text-[22px]" />
      </button>
      {(isClicked.durations || isClicked.settings || isClicked.languages) && (
        <span
          onClick={closeAllClicked}
          className="block backdrop-blur-sm w-screen h-screen absolute top-0"
        ></span>
      )}
    </div>
  );
};

export default Navbar;
