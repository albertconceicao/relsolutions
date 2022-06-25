import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";
import { Video } from "../components/Video";

export default function Home() {
  return (
    <Flex direction="column" justify="center" mx="auto" maxWidth={1400} mt="-150px">
      
      <BoxContent width="900px" height="200px">
        <Text mx="auto" as="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat corporis tempora ducimus eius possimus quaerat modi odio neque magnam aperiam illum, numquam unde nesciunt voluptates reprehenderit, suscipit explicabo totam!
        </Text>
      </BoxContent>
      <Video />
    </Flex>
    
  )
}
