import { useEffect, useState } from "react";
import { useAppStore } from "../../lib/store"
import Task from "../components/Task";

const Tasks = () => {
  const {tasks} = useAppStore();
  const [completedTasks, setCompletedTasks] = useState(tasks)
  const [waitedTasks, setWaitedTasks] = useState(tasks)

  useEffect(()=>{
    setCompletedTasks(tasks.filter(t=>t.completed))
    setWaitedTasks(tasks.filter(t=> !t.completed))
  },[tasks])

  return (
    <div className="flex flex-col gap-5 h-full w-full p-2">
      <div className="flex flex-col-reverse gap-5 min-h-[32%] overflow-y-scroll p-5">
        {completedTasks.map((task)=>(
          <Task key={task.id} task={task} />
        ))}
      </div>
          <div className="">
            <Task task={waitedTasks[0]} />
          </div>

      <div className="flex flex-col gap-5 max-h-[40%] overflow-y-scroll p-5 relative">
        {waitedTasks.slice(1,).map((task)=>(
          <Task key={task.id} task={task} />
        ))}
      </div>

      <div id="add-task">
        <input type="text" 
          className="drop-shadow-sm bg-second-light dark:bg-second-dark"
        
        />
      </div>
    </div>
  )
}

export default Tasks