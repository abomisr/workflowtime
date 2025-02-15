import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


import { useAppStore } from "../../lib/store"
import Task from "../components/Task";
import { eisMatrix } from "../../constants";
import { FaTrash } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import { GiBroom } from "react-icons/gi";



const Tasks = () => {
  const router = useRouter();
  const currentLang = router.locale;

  const { tasks, isDark, rmTask,rmCompletedTasks,setTasks } = useAppStore();


  const onDragEnd = (result: Record<string, any>) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (destination.droppableId == "0") {
      rmTask(+draggableId)
      return;
    }

    let newTask = tasks.filter((task) => { if (task.id === +draggableId) { task.priority = destination.droppableId; return task } })[0]
    let newTasks = [...tasks]
    
    newTasks.splice(source.index, 1)
    newTasks.splice(destination.index, 0, newTask)

    setTasks(newTasks)
  }

  return (
    <main dir={currentLang == "ar" ? "rtl" : "lft"} className={`${isDark && "dark"} overflow-x-hidden`}>
      <Head>
        <title>Tasks | PoMatrix</title>
        <meta
          name="description"
          content="start your workflow time with PoMatrix."
        />
        <meta
          name="keywords"
          content="workflow,promo,promodo,break,countdown"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DragDropContext onDragEnd={onDragEnd} >
        <div className="overflow-x-hidden w-screen min-h-screen h-fit bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200 flex flex-col items-center justify-center">
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
                <Droppable droppableId={id} key={id}>
                  {(provided: Record<string, any>) => (
                    <>
                      <span className="md:hidden uppercase font-bold">{text}</span>
                      <div style={{ backgroundColor: color }} className={`min-h-[250px] p-4 flex flex-col justify-start items-center overflow-x-hidden rounded-md relative gap-4`} ref={provided.innerRef} {...provided.droppableProps}>
                        {tasks.map((task, index) => {
                          if (task.priority === id && !task.completed) return (
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
        <div className="overflow-x-hidden w-screen min-h-screen h-fit bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200 flex flex-col items-center justify-center">
          <div className={`min-h-[250px] p-4 md:w-[50%] w-[80%] md:mt-20 mt-[450px] px-[20px] flex flex-col justify-start items-center overflow-x-hidden rounded-md relative gap-4 bg-green-600`}>
            <div className="flex items-center justify-between w-full">
            <span></span>
            <p className="font-bold text-white">Completed Tasks</p>
            <button onClick={rmCompletedTasks}>
            <GiBroom className="bg-white text-slate-900 drop-shadow-md p-2 text-[35px] rounded-full" />
            </button>
            </div>
            {tasks.map((task) =>{
            if(task.completed) return (
                <div key={task.id} className="h-fit w-full p-4 pb-6 bg-second-light dark:bg-second-dark drop-shadow-md rounded-lg select-none" >
                <div className="flex justify-start items-center gap-2">
                  <p>{task.title}</p>
                </div>
                <span className="text-gray-400 font-bold text-[13px] absolute bottom-1 right-1">
                  {task.duration}m
                </span>
              </div>
              )
})}
          </div>
        </div>
        <Droppable droppableId={"0"}>
          {(provided, snapshot) => (
            <span ref={provided.innerRef} {...provided.droppableProps} style={snapshot.isDraggingOver ? { backgroundColor: "#ff5959" } : {}} className="bg-red-300 text-slate-700 p-6 text-[27px] rounded-tr-2xl drop-shadow-md fixed bottom-0 left-0"><FaTrash /></span>
          )}
        </Droppable>
        <Navbar />
      </DragDropContext>
    </main>
  )
}

export default Tasks