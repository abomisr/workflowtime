import { langs } from "../../constants";
import { useRouter } from "next/router";
import { useAppStore } from "../../lib/store";

const Languages = () => {
    const router = useRouter();
    
    const { closeAllClicked } = useAppStore();

  const changeLang = (locale: string) => {
    closeAllClicked()
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
        {langs.map((lang) => (
            <button
            key={lang.locale}
            onClick={()=>changeLang(lang.locale)}
            className="bg-first-light dark:bg-first-dark drop-shadow-md p-3 px-16 rounded-md text-[22px]"
            >
            <span>{lang.icon + " "}</span>
            <span>{lang.title}</span>
            </button>
        ))}
    </>
  );
};

export default Languages;
