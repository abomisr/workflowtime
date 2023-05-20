import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import { useAppStore } from "../../lib/store"
import { useEffect, useState } from 'react'

const FloatTask = () => {
    const {tasks} = useAppStore()
    const [currentTask, setCurrentTask] = useState(tasks[0])
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    const bind = useDrag(({ down, offset: [ox, oy] }) => api.start({ x: ox, y: oy, immediate: down }), {
        bounds: { left: 0, right: 0, top: 0, bottom: 0 } ,rubberband:true
      })

     useEffect(()=>{
        let cTask = tasks.find((task)=> task.isCurrent )

        cTask && setCurrentTask(cTask)
     },[tasks])

  return (
    <animated.div style={{x,y}} {...bind()} className={`h-fit w-fit p-4 bg-second-light dark:bg-second-dark drop-shadow-md rounded-lg absolute top-10`}>

        {currentTask.title}
    </animated.div>
  )
}

export default FloatTask