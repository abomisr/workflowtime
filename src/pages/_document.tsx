import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-first-light dark:bg-first-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
