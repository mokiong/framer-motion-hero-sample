import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
