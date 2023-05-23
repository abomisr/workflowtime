import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { useAppStore } from "../../lib/store";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { abbText } from "../../lib/utils";
import { eisMatrix } from "../../constants";

const FloatTask = () => {
  const { t } = useTranslation("common");

  const [currentTask, setCurrentTask] = useState<
    { title: string; duration: number; id:number; priority:string } | undefined
  >(undefined);

  const { tasks,setCTask,completeTask,handleClick} = useAppStore();
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(
    ({ down, offset: [ox, oy] }) =>
      api.start({ x: ox, y: oy, immediate: down }),
    {
      bounds: { left: 0, right: 0, top: 0, bottom: 0 },
      rubberband: true,
    }
  );

  //  useEffect(()=>{
  //     let cTask = tasks.find((task)=> task.isCurrent && !task.completed )

  //     setCurrentTask(cTask)
  //  },[tasks])

  const selectTask = (id:any)=>{
    if(id == "empty") return;

      let cTask = tasks.find((task)=> task.id == +id )

      if(!cTask) return;

    setCurrentTask(cTask)
    setCTask(+id)
  }

  const completeTaskFunc = () =>{
    setCurrentTask(undefined)
    currentTask && completeTask(currentTask.id)
  }

  return (
    <div className="absolute top-10 min-w-[280px] flex items-center justify-center">
      {currentTask ? (
        <animated.div
          style={{ x, y,backgroundColor: eisMatrix.find((e)=> e.id === currentTask.priority)?.color }}
          {...bind()}
          className={`h-fit w-fit min-w-full p-4 pb-6  drop-shadow-md rounded-lg select-none cursor-grab active:cursor-grabbing text-slate-100 font-bold`}
        >
          <div className="flex justify-start items-center gap-2">
            <input type="checkbox" className="cursor-pointer" onClick={completeTaskFunc} />
            <p>{abbText(currentTask.title,45)}</p>
          </div>
          <span className="text-gray-300 font-bold text-[13px] absolute bottom-1 right-1">
            {currentTask.duration}m
          </span>
        </animated.div>
      ) : tasks.filter((task)=> !task.completed).length === 0 ? (
        <Link
          href="/tasks"
          onClick={()=>handleClick("addTask")}
          className="border-2 border-dashed border-cyan-400 p-4 px-8 hover:bg-transparent dark:hover:bg-transparent transition-all bg-black/5 dark:bg-white/10"
        >
          Add new tasks
        </Link>
      ) : (
        <select onChange={(e)=>selectTask(e.target.value)} className="bg-second-light dark:bg-second-dark p-3 drop-shadow-md rounded-sm outline-none cursor-pointer w-full">
            <option value={"empty"}>{t("start_with")}</option>
            {tasks.filter((task)=> !task.completed).sort((t1,t2)=> +t1.priority - +t2.priority).map((task)=>(
                <option key={task.id} value={task.id} className="py-3 cursor-pointer" style={{cursor:"pointer"}}>{task.title}</option>
            ))}
        </select>
      )}
    </div>
  );
};

export default FloatTask;
