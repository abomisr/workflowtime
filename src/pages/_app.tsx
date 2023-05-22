import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { useAppStore } from '../../lib/store'

function App({ Component, pageProps }: AppProps) {
  const { tasks,setTasks } = useAppStore()

  useEffect(()=>{
    if(typeof window == "undefined") return;

    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"))

  },[])


  useEffect(() => {
    if(typeof window == "undefined") return;
    
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return <Component {...pageProps} />
}
export default appWithTranslation(App)
