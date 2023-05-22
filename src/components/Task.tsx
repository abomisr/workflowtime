import {Draggable} from "react-beautiful-dnd"
import { useAppStore } from "../../lib/store";
import { useEffect } from "react";

const Task = ({
  task,
  index
}: {
  task: {
    id: number;
    icon?: string;
    title: string;
    duration: number;
    completed: boolean;
  };
  index: number
}) => {

  const { completeTask } = useAppStore();

  return (
    <Draggable draggableId={task.id.toString()} index={index} >
      {(provided: Record<string, any>) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} /* style={snapshot.draggingOver === "0"? {backgroundColor:"#ff5959"}:{}} */ className="h-fit w-full p-4 pb-6 bg-second-light dark:bg-second-dark drop-shadow-md rounded-lg select-none cursor-grab active:cursor-grabbing" >
          <div className="flex justify-start items-center gap-2">
            <input type="checkbox" className="cursor-pointer" onChange={()=>completeTask(task.id)} />
            <p>{task.title}</p>
          </div>
          <span className="text-gray-400 font-bold text-[13px] absolute bottom-1 right-1">
            {task.duration}m
          </span>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
