import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme/index";
import Background from "../components/Background";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Background>
        <Component {...pageProps} />
      </Background>
    </ChakraProvider>
  );
}

export default MyApp;
