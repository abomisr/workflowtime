import { useRef, useState } from "react";
import { useAppStore } from "../../lib/store";

const DurationInputs = () => {
  const {
    workflowInMinutes,
    setWorkflowInMinutes,
    breakInMinutes,
    setBreakInMinutes,
  } = useAppStore();
  const [workflowInput,setWorkflowInput] = useState(workflowInMinutes)
  const [breakInput,setBreakInput] = useState(breakInMinutes)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setWorkflowInMinutes(workflowInput);
    setBreakInMinutes(breakInput);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={workflowInput || ""}
          onChange={(e)=>{setWorkflowInput(+e.target.value)}}
          type="number"
          required
          min="5"
          placeholder="Workflow duration"
        />
        <input
          value={breakInput || ""}
          onChange={(e)=>{setBreakInput(+e.target.value)}}
          type="number"
          required
          min="0"
          placeholder="Break duration"
        />
        <button type="submit" disabled={workflowInput === workflowInMinutes && breakInput === breakInMinutes}>Save</button>
      </form>
    </div>
  );
};

export default DurationInputs;
