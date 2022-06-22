import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";

export default function Services() {
    return (
        <Flex direction="column"  mt="-80px" justify="center" >

            <Stack spacing="8" mx="auto" >
                <BoxContent width="900px" height="300px">
                    <Box>
                        <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Limpeza de placas solar</Text>
                        <Text textAlign={["justify"]} p="8" color="gray.500" fontSize="1.1rem">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae exercitationem dolorem fugiat itaque vitae a ex harum, quasi neque, atque soluta tenetur, quae eum. Sequi neque est quasi vel beatae!
                        </Text>
                    </Box>
                </BoxContent>
            </Stack>
        </Flex>
    );
}