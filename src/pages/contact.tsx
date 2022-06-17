import { Box, Flex, FormControl, FormLabel, Stack, Text, Input, FormHelperText, Button } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";

export default function Contact () {
    return (
        <Flex direction="column"  mt="-80px" justify="center" >

            <Stack spacing="8" mx="auto" >
                <BoxContent width="600px" height="350px">
                    <Box>
                        <Text as="h2" fontSize="1.4rem" fontWeight={"500"}>Solicite um orçamento</Text>
                        <FormControl maxW="400px" mx="auto" mt="4">
                            <Stack spacing="6">
                                <Box>
                                    <FormLabel htmlFor='email'>Endereço de e-mail</FormLabel>
                                    <Input id='email' type='email'bg="gray.400" />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor='number'>Telefone para contato</FormLabel>
                                     <Input id='number' type='tet'bg="gray.400" />
                                </Box>
                                <Box>
                                    <Button w="70%" 
                                    bg="orange.700" color="white" _hover={{
                                        bg: "orange.600"
                                    }}
                                    >Solicitar orçamento</Button>
                                </Box>

                            </Stack>
                        </FormControl>
                    </Box>
                </BoxContent>
            </Stack>
        </Flex>
    );
}