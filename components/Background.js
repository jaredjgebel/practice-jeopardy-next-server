import React from "react";
import { Flex } from "@chakra-ui/react";

function Background({ children }) {
  return (
    <Flex
      height="100vh"
      width="100vw"
      color="whitesmoke"
      bgGradient="linear(to-b,#050b9d 25.52%, #040639 100%)"
    >
      {children}
    </Flex>
  );
}

export default Background;
