import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header';
import { WhatsApp } from '../components/WhatsApp';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <WhatsApp />
    </ChakraProvider>
  );
}

export default MyApp
