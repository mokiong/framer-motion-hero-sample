import React from "react";
import { Box } from "@chakra-ui/layout";

const Wrapper = ({ children }) => {
  return (
    <Box h="100vh" bgColor="grey" maxH="100vh" p="40px">
      {children}
    </Box>
  );
};

export default Wrapper;
