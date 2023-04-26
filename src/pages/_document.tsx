import { Html, Head, Main, NextScript } from 'next/document'
import { useAppStore } from '../../lib/store'

export default function Document() {
  const {isDark} = useAppStore();

  return (
    <Html lang="en" className={`${isDark && "dark"}`}>
      <Head />
      <body className='bg-first-light dark:bg-first-dark text-slate-800 dark:text-slate-200 '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
