import '../assets/styles/globals.scss'
import NextProgressBar from 'nextjs-progressbar'
import {useState} from "react";
import style from '../assets/styles/Home.module.scss'

// @ts-ignore
function MyApp({ Component, pageProps }) {

    const [colorStyle, setColorStyle] = useState(style.lightTheme)


  return (
      <>
          <div className={ `${colorStyle}` }>
              <NextProgressBar
                  color='#eb601e'
                  startPosition={0.3}
                  stopDelayMs={200}
                  height={3}
              />
              <button className='themeButton' onClick={ ()=>{setColorStyle(style.darkTheme)} }>DARK MODE</button>
              <button className='themeButton' onClick={ ()=>{setColorStyle(style.lightTheme)} }>LIGHT MODE</button>
              <Component {...pageProps} />
          </div>

      </>
  )
}

export default MyApp
