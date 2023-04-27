import { useSpring, animated } from "@react-spring/web";
import CloseAllClicked from "./CloseAllClicked";

interface ContentProps {
    Content: ()=>JSX.Element; 
  }

const SettingsSection = ({Content}: ContentProps) => {
  const props = useSpring({
    from: { y: "-200%", opacity: 0 },
    to: { y: "-25%", opacity: 1 },
  });

  return (
    <div className="w-screen h-screen fixed top-0 right-0 flex items-center justify-center">
      <animated.div
        style={props}
        className="z-10 w-[70vw] h-[250px] duration-100 flex items-center justify-evenly flex-col bg-second-light/70 dark:bg-second-dark/70 backdrop-blur-sm drop-shadow-md rounded-md"
      >
        <Content />
      </animated.div>
      <CloseAllClicked />
    </div>
  );
};

export default SettingsSection;
