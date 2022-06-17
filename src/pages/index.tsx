import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";
import { Video } from "../components/Video";

export default function Home() {
  return (
    <>
      <Box mb="8" mt="-80px">
        <BoxContent width="900px" height="200px">
          <Text as="h2">
            Introdução do site
          </Text>
        </BoxContent>
      </Box>
      <Video />
    </>
    
  )
}
