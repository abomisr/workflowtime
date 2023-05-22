import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


import { useAppStore } from "../../lib/store"
import Task from "../components/Task";


const eisMatrix = [
  {
    id: "1",
    color: "bg-red-800",
    text: "Urgent & Important"
  },
  {
    id: "2",
    color: "bg-red-600",
    text: "Not Urgent & Important"
  },
  {
    id: "3",
    color: "bg-red-400",
    text: "Urgent & Not Important"
  },
  {
    id: "4",
    color: "bg-red-300",
    text: "Not Urgent & Not Important"
  },
]

const Tasks = () => {
  const router = useRouter();
  const currentLang = router.locale;

  const { tasks, isDark } = useAppStore();

  const [completedTasks, setCompletedTasks] = useState(tasks)
  const [waitedTasks, setWaitedTasks] = useState(tasks)

  useEffect(() => {
    setCompletedTasks(tasks.filter(t => t.completed))
    setWaitedTasks(tasks.filter(t => !t.completed))
  }, [tasks])

  const onDragEnd = (result) => {

  }

  return (
    <main dir={currentLang == "ar" ? "rtl" : "lft"} className={`${isDark && "dark"}`}>
      <Head>
        <title>Tasks | Workflow time</title>
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
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="w-screen h-screen overflow-hidden bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200 flex items-center justify-center">
          <div className="w-[600px] md:h-[580px] max-w-[85vw] h-[90vh]  grid md:grid-cols-2 gap-4 m-auto relative">
            <div className="absolute top-0 translate-y-[-100%] p-1 md:flex items-center justify-around w-full hidden uppercase font-bold">
              <span>Urgent</span>
              <span>Not Urgent</span>
            </div>
            <div className="absolute left-0 translate-x-[-64%] md:flex items-center flex-col justify-around h-full w-fit hidden uppercase font-bold">
              <span className="rotate-[-90deg]">Important</span>
              <span className="rotate-[-90deg]">Not Important</span>
            </div>
            {
              eisMatrix.map(({ id, color, text }) => (
                <Droppable droppableId={id}>
                  {(provided: Record<string, any>) => (
                    <>
                      <span className="md:hidden uppercase font-bold">{text}</span>
                      <div className={` p-4 ${color} flex flex-col justify-start items-center overflow-x-hidden rounded-md relative`} ref={provided.innerRef} {...provided.droppableProps}>
                        {tasks.map((task, index) => {
                          if (task.matrixType === id) return (
                            <Task key={task.id} index={index} task={task} />
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    </>
                  )}
                </Droppable>
              ))
            }

          </div>
        </div>
      </DragDropContext>
    </main>
  )
}

export default Tasks