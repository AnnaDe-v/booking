import NextProgressBar from 'nextjs-progressbar'
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "@/components/themeConfig";
import {GlobalStyles} from '@/components/globalStyles';
import Toggle from '@/components/Toggle';
import { useDarkMode } from '@/components/useDarkMode';
import {ToastContainer} from "react-toastify";

// @ts-ignore
function MyApp({Component, pageProps}) {


    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;


        return (
            <ThemeProvider theme={themeMode}>
                <>
                    <GlobalStyles/>
                    <NextProgressBar
                        color='#eb601e'
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={3}
                    />
                    <Toggle theme={theme} toggleTheme={themeToggler} />
                    <Component {...pageProps} />
                    <ToastContainer theme='dark'/>
                </>
            </ThemeProvider>

        )

}

export default MyApp