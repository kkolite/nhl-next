import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>NHL Next</title>
        <meta name="description" content="Created by kkolite. Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100&family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
