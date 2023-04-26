import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="relative">
      <button
        className={`button ${
          isDark ? "bg-gray-900 text-purple-500" : "bg-gray-100 text-orange-500"
        }`}
        onClick={toggleTheme}
      >
        {isDark ? (
          <>
            <FaMoon />
            <div className="circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 w-8 h-8 rounded-full opacity-0 transition duration-300" />
          </>
        ) : (
          <>
            <FaSun />
            <div className="circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 w-8 h-8 rounded-full opacity-0 transition duration-300" />
          </>
        )}
      </button>
    </div>
  );
}

export default DarkMode;
