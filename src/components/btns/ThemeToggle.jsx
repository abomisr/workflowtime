import { FaSun, FaMoon } from "react-icons/fa";
import { useAppStore } from "../../../lib/store";

function ThemeToggle() {
  const { isDark, toggleDark } = useAppStore();

  return (
      <button className="relative w-12 h-6 rounded-xl bg-orange-400 dark:bg-purple-400 drop-shadow-md overflow-hidden" onClick={toggleDark}>
        {isDark ? (
          <>
            <FaMoon className="absolute top-1 left-1 text-purple-900" />
          </>
        ) : (
          <>
            <FaSun className="absolute top-1 right-1 text-orange-900" />
          </>
        )}
        <span className={`rounded-full w-[50%] h-full bg-white drop-shadow-lg block absolute top-0 transition-all ${isDark ? "translate-x-[100%]":"translate-x-0"}`}></span>
      </button>
  );
}

export default ThemeToggle;
