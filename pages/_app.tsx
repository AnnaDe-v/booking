// import '../assets/styles/globals.scss'
import NextProgressBar from 'nextjs-progressbar'
import {useState} from "react";
// import style from '../assets/styles/Home.module.scss'
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "@/components/themeConfig";
import {GlobalStyles} from '@/components/globalStyles';

// @ts-ignore
function MyApp({Component, pageProps}) {


    const [theme, setTheme] = useState('light');

    const themeToggler = () => {

        theme === 'light' ? setTheme('dark') : setTheme('light')}

        return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <>
                    <GlobalStyles/>
                    <NextProgressBar
                        color='#eb601e'
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={3}
                    />
                    <button className='themeSwitcher' onClick={themeToggler}>switch theme</button>
                    <Component {...pageProps} />
                </>
            </ThemeProvider>

        )

}

export default MyApp