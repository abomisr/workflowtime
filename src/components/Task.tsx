const Task = ({
  task,
}: {
  task: {
    id: number;
    icon: string;
    title: string;
    duration: number;
    completed: boolean;
  };
}) => {
  return (
    <div className={`${task.completed ? "bg-green-600 text-white":"bg-second-light dark:bg-second-dark"} drop-shadow-md rounded-lg p-4`}>
      <p>{task.title}</p>
    </div>
  );
};

export default Task;
