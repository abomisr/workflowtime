import { useSpring, animated } from '@react-spring/web'
import { useState } from "react";

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

  const props = useSpring({
    from: { y: "200%",opacity:0 },
    to: { y: "0%", opacity:1 },
  })


  return (
  <>
    <div className="fixed top-0 right-0 -translate-x-[13%] translate-y-[100%] h-40 w-[80vw] z-10">
  <animated.div style={props} className="w-full h-full">
      <form onSubmit={handleSubmit} className="flex flex-col bg-second-light dark:bg-second-dark h-full md:w-[50%] mx-auto w-full ">
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
    </animated.div>
    </div>
    </>  
  );
};  

export default DurationInputs;



