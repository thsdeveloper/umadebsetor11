import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider, theme} from '@chakra-ui/react'
import Header from "@/components/header";

const darkTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
};

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ChakraProvider theme={darkTheme}>
                <Header />
                <Component {...pageProps} />
            </ChakraProvider>

        </>
    );
}
