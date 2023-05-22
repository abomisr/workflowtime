import { RiSettingsFill } from "react-icons/ri";
import { GiDuration } from "react-icons/gi";

import ThemeToggle from "./btns/ThemeToggle";
import { useAppStore } from "../../lib/store";
import DurationInputs from "./DurationInputs";
import Languages from "./Languages";

import { navbarItems } from "../../constants";
import CloseAllClicked from "./CloseAllClicked";
import SettingsSection from "./SettingsSection";
import Link from "next/link";
import AddTask from "./AddTask";
import Links from "./Links";

const Navbar = () => {
  const { handleClick, isClicked } = useAppStore();

  return (
    <>
      {isClicked.durations && <SettingsSection Content={DurationInputs} />}
      {isClicked.languages && <SettingsSection Content={Languages} />}
      {isClicked.addTask && <SettingsSection Content={AddTask} />}
      {isClicked.links && <SettingsSection Content={Links} />}
      {isClicked.settings && (
        <>
          <div
            id="navbar"
            className="fixed bottom-[90px] right-3 p-3  drop-shadow-sm z-[1000] bg-second-light dark:bg-second-dark rounded-2xl flex items-center justify-center gap-7 flex-col"
          >
            <ThemeToggle />
            {navbarItems.map((item) => (
              <button
              key={item.title}
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
        } transition-all duration-400 p-4 bg-second-light dark:bg-second-dark rounded-full drop-shadow-md dark:text-white text-black`}
      >
        <RiSettingsFill className="text-[22px]" />
      </button>
      {isClicked.settings && (
        <CloseAllClicked />
      )}
    </>
  );
};

export default Navbar;
