import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


import { useAppStore } from "../../lib/store"
import Task from "../components/Task";
import { eisMatrix } from "../../constants";
import { FaTrash } from "react-icons/fa";
import Navbar from "@/components/Navbar";



const Tasks = () => {
  const router = useRouter();
  const currentLang = router.locale;

  const { tasks, isDark,rmTask } = useAppStore();

  const [completedTasks, setCompletedTasks] = useState(tasks)
  const [waitedTasks, setWaitedTasks] = useState(tasks)

  useEffect(() => {
    setCompletedTasks(tasks.filter(t => t.completed))
    setWaitedTasks(tasks.filter(t => !t.completed))
  }, [tasks])

  const onDragEnd = (result:Record<string, any>) => {
    const {destination, source, draggableId} = result;

    if(!destination) return;
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    if(destination.droppableId == "0"){
      rmTask(+draggableId)
      console.log(tasks)
      return;
    }

      let newTask = tasks.filter((task)=> {if(task.id === +draggableId) {task.matrixType = destination.droppableId;return task}})[0]
      tasks.splice(source.index, 1)
      tasks.splice(destination.index, 0,newTask)

     
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
      <DragDropContext onDragEnd={onDragEnd} >
        <div className="w-screen min-h-screen h-fit bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200 flex items-center justify-center">
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
                      <div style={{backgroundColor:color}} className={`min-h-[250px] p-4 flex flex-col justify-start items-center overflow-x-hidden rounded-md relative gap-4`} ref={provided.innerRef} {...provided.droppableProps}>
                        {tasks.map((task, index) => {
                          if (task.matrixType === id && !task.completed) return (
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
          <Droppable droppableId={"0"}>
            {(provided,snapshot)=>(
              <span ref={provided.innerRef} {...provided.droppableProps} style={snapshot.isDraggingOver? {backgroundColor:"#ff5959"}:{}} className="bg-red-300 p-6 text-[27px] rounded-sm drop-shadow-md absolute bottom-0 left-0"><FaTrash /></span>
            )}
          </Droppable>
          
        </div>
      </DragDropContext>
      <Navbar />
    </main>
  )
}

export default Tasks