import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header';
import { WhatsApp } from '../components/WhatsApp';
import { theme } from '../styles/theme';
import { Cookies } from '../components/Cookies';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <WhatsApp />
      <Cookies />
    </ChakraProvider>
  );
}

export default MyApp
