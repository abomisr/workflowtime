import { useSpring, animated } from "@react-spring/web";
import { langs } from "../../constants";
import { useRouter } from "next/router";

const Languages = () => {
    const router = useRouter();
  const props = useSpring({
    from: { y: "-200%", opacity: 0 },
    to: { y: "-25%", opacity: 1 },
  });

  const changeLang = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <animated.div
      style={props}
      className="z-10 w-[70vw] h-[250px] duration-100 flex items-center justify-evenly flex-col bg-second-light/70 dark:bg-second-dark/70 backdrop-blur-sm drop-shadow-md rounded-md"
    >
      {langs.map((lang) => (
        <button
          onClick={()=>changeLang(lang.locale)}
          className="bg-first-light dark:bg-first-dark drop-shadow-md p-3 px-16 rounded-md text-[22px]"
        >
          <span>{lang.icon + " "}</span>
          <span>{lang.title}</span>
        </button>
      ))}
    </animated.div>
  );
};

export default Languages;
