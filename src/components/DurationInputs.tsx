import { useSpring, animated } from '@react-spring/web'
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
  const [workflowInput,setWorkflowInput] = useState(workflowInMinutes)
  const [breakInput,setBreakInput] = useState(breakInMinutes)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    closeAllClicked()
    setWorkflowInMinutes(workflowInput);
    setBreakInMinutes(breakInput);
  };  

  const props = useSpring({
    from: { y: "200%",opacity:0 },
    to: { y: "0%", opacity:1 },
  })


  return (
  <>
    <div className="fixed top-0 right-0 -translate-x-[13%] translate-y-[100%] w-[80vw] z-10">
  <animated.div style={props} className="w-full h-full duration-100">
      <form onSubmit={handleSubmit} className="flex flex-col p-8 gap-4 bg-second-light dark:bg-second-dark h-full md:w-[50%] mx-auto w-full rounded-lg">
        <input
          value={workflowInput || ""}
          onChange={(e)=>{setWorkflowInput(+e.target.value)}}
          type="number"
          required
          min="5"
          placeholder="Workflow duration"
          className='drop-shadow-sm dark:text-black'
        />
        <input
          value={breakInput || ""}
          onChange={(e)=>{setBreakInput(+e.target.value)}}
          type="number"
          required
          min="0"
          placeholder="Break duration"      
          className='drop-shadow-sm dark:text-black'
        />
        <button type="submit" className='bg-blue-600 p-2.5 w-[60%] mx-auto rounded-md disabled:bg-gray-500 text-white disabled:active:scale-100 disabled:cursor-not-allowed' disabled={workflowInput === workflowInMinutes && breakInput === breakInMinutes}>Save</button>
      </form>
    </animated.div>
    </div>
    </>  
  );
};  

export default DurationInputs;



