import { eisMatrix } from "../../constants"
import { useAppStore } from "../../lib/store";

const AddTask = () => {
    const {addTask,closeAllClicked, workflowInMinutes,breakInMinutes} = useAppStore();
    const handleFormSubmit = (e: Record<string, any>) => {
        e.preventDefault();
        const title = e.target["0"].value;
        const duration = +e.target["1"].value || workflowInMinutes;
        const bDuration = +e.target["2"].value || breakInMinutes;
        const priority = e.target["3"].value;
        const completed = false

        const id = Date.now()

        const newTask = {
            title, duration, bDuration, priority, completed,id
        }

        addTask(newTask)
        closeAllClicked()
    }
    return (
        <form onSubmit={handleFormSubmit} className="text-slate-900 flex items-center justify-center flex-col gap-3">
            <input type="text" placeholder="Title" required />
            <div className="flex items-center justify-center max-w-full gap-3">
                <input type="number" placeholder={`Work Duration | default ${workflowInMinutes}m`} className="" />
                <input type="number" placeholder={`Break Duration | default ${breakInMinutes}m`} className="" />
            </div>
            <select className="outline-none p-2.5 rounded-md">
                {eisMatrix.map(({ text, id }) => (
                    <option value={id}>{text}</option>
                ))}
            </select>
            <button type="submit" className="bg-blue-500 text-white p-3 w-full rounded-3xl">Save</button>
        </form>
    )
}

export default AddTask