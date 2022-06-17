import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";

export default function Info () {
    return (
        <Flex direction="column"  mt="-80px" justify="center" >

            <Stack spacing="8" mx="auto" >
                <BoxContent width="900px" height="300px">
                    <Box>
                        <Text as="h2" fontSize="1.4rem" fontWeight={"500"}>Missão</Text>
                    </Box>
                </BoxContent>
                <BoxContent width="900px" height="300px">
                    <Box>
                        <Text as="h2" fontSize="1.4rem" fontWeight={"500"}>Visão</Text>
                    </Box>
                </BoxContent>
                <BoxContent width="900px" height="300px">
                    <Box>
                        <Text as="h2" fontSize="1.4rem" fontWeight={"500"}>Valores</Text>
                    </Box>
                </BoxContent>
                
            </Stack>
        </Flex>

    );
}