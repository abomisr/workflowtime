import Countdown from "@/components/Countdown";
import { useAppStore } from "../../lib/store";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Tasks from "@/components/Tasks";


export default function Home() {
  const { t } = useTranslation("common");

  const {
    isDark,
    workflowInMinutes,
    breakInMinutes,
    started,
    setStarted,
  } = useAppStore();
  const [resetCounter, setResetCounter] = useState(1);


  const router = useRouter();
  const currentLang = router.locale;
  
  return (
    <main dir={currentLang == "ar" ? "rtl" : "lft"} className={`${isDark && "dark"}`}>
      <Head>
        <title>Workflow time</title>
        <meta
          name="description"
          content="start your workflow time with workflowtime."
        />
        <meta
          name="keywords"
          content="workflow,promo,promodo,break,countdown"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-screen h-screen flex bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200">
        <div className="flex-1 max-w-[33vw] flex items-center justify-center p-5 bg-second-light/60">
        <Tasks />
        </div>
        <div className="flex-1 max-w-[34vw] relative flex flex-col items-center justify-center h-full gap-10">
          <Countdown
            workflowInMinutes={workflowInMinutes}
            breakInMinutes={breakInMinutes}
            started={started}
            resetCounter={resetCounter}
          />
          <button
            onClick={() =>
              started ? setResetCounter(resetCounter + 1) : setStarted(true)
            }
            className={`p-2.5 rounded-md bg-sky-600 text-white px-10`}
          >
            {started ? t("reset") : t("start")}
          </button>
        </div>
        <div className="flex-1 max-w-[33vw] ">

        </div>
        <Navbar />
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}