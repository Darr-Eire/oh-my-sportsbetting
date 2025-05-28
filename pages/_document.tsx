// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font preload, favicon, meta, etc. */}
      </Head>
      <body className="bg-bgDark text-white font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
