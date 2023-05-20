import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import { useAppStore } from "../../lib/store"
import { useEffect, useState } from 'react'
import Link from 'next/link'

const FloatTask = () => {
    const [currentTask, setCurrentTask] = useState<{title:string,duration:number} | undefined>(undefined)

    const {tasks} = useAppStore()
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

    const bind = useDrag(({ down, offset: [ox, oy] }) => api.start({ x: ox, y: oy, immediate: down }), {
        bounds: { left: 0, right: 0, top: 0, bottom: 0 } ,rubberband:true
      })

     useEffect(()=>{
        let cTask = tasks.find((task)=> task.isCurrent )

        setCurrentTask(cTask)
     },[tasks])

  return (
    <>
      {
          currentTask ?
          <animated.div style={{x,y}} {...bind()} className={`h-fit w-fit p-4 pb-6 bg-second-light dark:bg-second-dark drop-shadow-md rounded-lg absolute top-10 select-none`}>
                {currentTask.title}
                <span className='text-gray-500 font-bold text-[13px] absolute bottom-1 right-1'>{currentTask.duration}m</span>
            </animated.div>
            :
            <Link href="/tasks" className='border-2 border-dashed border-cyan-400 absolute top-10 p-4 px-8 hover:bg-transparent dark:hover:bg-transparent transition-all bg-black/5 dark:bg-white/10'>
                Add new task
            </Link>
        }
    </>
  )
}

export default FloatTask