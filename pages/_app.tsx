import '../assets/styles/globals.scss'
import NextProgressBar from 'nextjs-progressbar'

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
      <>
        <NextProgressBar
            color='#eb601e'
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
        />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
