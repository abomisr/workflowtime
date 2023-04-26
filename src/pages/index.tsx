import Countdown from "@/components/Countdown";
import { useAppStore } from "../../lib/store";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const { isDark, workflowInMinutes, breakInMinutes, started, setStarted } =
    useAppStore();
  const [resetCounter, setResetCounter] = useState(1);

  return (
    <main className={`${isDark && "dark"}`}>
      <Head>
        <title>Workflow time</title>
        <meta name="description" content="start your workflow time with workflowtime." />
        <meta name="keywords" content="workflow,promo,promodo,break,countdown" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-screen h-screen flex flex-col bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200">
        <div className="flex flex-col items-center justify-center h-full gap-10">
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
            {started? "Reset":"Start"}
          </button>
        </div>
        <Navbar />
      </div>
    </main>
  );
}
