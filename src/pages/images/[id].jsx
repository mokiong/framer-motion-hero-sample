import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

import Wrapper from "../../components/Wrapper";

const MotionBox = motion(Box);

const PicId = () => {
  const router = useRouter();
  const picId = router.query.id;
  return (
    <Wrapper>
      <Box w="100%">
        <MotionBox layoutId={picId} mx="auto" maxW="500px" maxH="600px">
          <Image src={`/images/${picId}.jpg`} width={500} height={600} />
        </MotionBox>
      </Box>
    </Wrapper>
  );
};

export default PicId;
