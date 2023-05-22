import {Draggable} from "react-beautiful-dnd"

const Task = ({
  task,
  index
}: {
  task: {
    id: number;
    icon: string;
    title: string;
    duration: number;
    completed: boolean;
  };
  index: number
}) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index} >
      {(provided: Record<string, any>) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="bg-second-light w-full min-h-[50px] m-3 rounded-md" >
          {task.title}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
