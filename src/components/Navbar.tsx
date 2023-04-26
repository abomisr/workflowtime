import ThemeToggle from "./btns/ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-second-light dark:bg-second-dark flex items-center justify-start p-3 drop-shadow-sm z-[1000]">
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
