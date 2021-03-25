import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";

const MotionBox = motion(Box);

const imageVariant = {
  animate: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
};

const Index = () => {
  return (
    <Wrapper>
      <Flex direction="row" p={3}>
        <Flex mx="auto">
          {["dog1", "dog2", "dog3", "dog4"].map((dog) => (
            <Link href={`/images/${dog}`}>
              <MotionBox
                border="solid"
                mr={4}
                layoutId={dog}
                variants={imageVariant}
                animate="animate"
                whileHover="hover"
              >
                <Image
                  src={`/images/${dog}` + ".jpg"}
                  width={250}
                  height={300}
                />
              </MotionBox>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Index;
