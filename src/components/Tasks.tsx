import { useEffect, useState } from "react";
import { useAppStore } from "../../lib/store"
import Task from "./Task";

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
      <div className="flex flex-col gap-5">
        {waitedTasks.map((task)=>(
          <Task task={task} />
        ))}
      </div>
    </div>
  )
}

export default Tasks