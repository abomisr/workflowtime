import { useState } from "react";

import { useAppStore } from "../../lib/store";

const DurationInputs = () => {
  const {
    workflowInMinutes,
    setWorkflowInMinutes,
    breakInMinutes,
    setBreakInMinutes,
    closeAllClicked,
  } = useAppStore();
  const [workflowInput, setWorkflowInput] = useState(workflowInMinutes);
  const [breakInput, setBreakInput] = useState(breakInMinutes);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    closeAllClicked();
    setWorkflowInMinutes(workflowInput);
    setBreakInMinutes(breakInput);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-8 gap-4 h-full md:w-[50%] mx-auto w-full rounded-lg"
      >
        <input
          value={workflowInput || ""}
          onChange={(e) => {
            setWorkflowInput(+e.target.value);
          }}
          type="number"
          required
          min="5"
          placeholder="Workflow duration"
          className="drop-shadow-sm bg-second-light dark:bg-second-dark"
        />
        <input
          value={breakInput || ""}
          onChange={(e) => {
            setBreakInput(+e.target.value);
          }}
          type="number"
          required
          min="0"
          placeholder="Break duration"
          className="drop-shadow-sm bg-second-light dark:bg-second-dark"
        />
        <button
          type="submit"
          className="bg-blue-600 p-2.5 w-[60%] mx-auto rounded-md disabled:bg-gray-500 text-white disabled:active:scale-100 disabled:cursor-not-allowed"
          disabled={
            workflowInput === workflowInMinutes && breakInput === breakInMinutes
          }
        >
          Save
        </button>
      </form>
    </>
  );
};

export default DurationInputs;
