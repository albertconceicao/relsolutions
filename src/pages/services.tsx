import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";

export default function Services() {
    return (
        <Flex direction="column"  mt="-170px" justify="center" >

            <Stack spacing="8" mx="auto" >
                {/* <BoxContent width="900px" height="300px">
                    <Box>
                        <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Limpeza de placas solar</Text>
                        <Text textAlign={["justify"]} p="8" color="gray.500" fontSize="1.1rem">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae exercitationem dolorem fugiat itaque vitae a ex harum, quasi neque, atque soluta tenetur, quae eum. Sequi neque est quasi vel beatae!
                        </Text>
                    </Box>
                </BoxContent>
                <BoxContent width="900px" height="300px">
                    <Box>
                        <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Serviço de instalação de placa solar</Text>
                        <Text textAlign={["justify"]} p="8" color="gray.500" fontSize="1.1rem">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae exercitationem dolorem fugiat itaque vitae a ex harum, quasi neque, atque soluta tenetur, quae eum. Sequi neque est quasi vel beatae!
                        </Text>
                    </Box>
                </BoxContent> */}
                <Accordion allowToggle w={["300px", "500px", "600px", "700px", "800px", "900px"]} mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="4"  >
                    <AccordionItem >
                        <h2>
                        <AccordionButton _expanded={{ bg: "orange.300", color: "white", borderRadius: "10px" }}>
                            <Box flex='1' textAlign='center' fontSize="1.6rem" fontWeight={"500"} >
                            <Text borderBottom="gray.300">Limpeza de placas solar</Text>
                            </Box>
                            <AccordionIcon fontSize="1.6rem" />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel p="8" color="gray.500" fontSize="1.1rem" textAlign={["justify"]} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                        {/* <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Section 2 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel p="8" color="gray.500" fontSize="1.1rem" textAlign={["justify"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem> */}
                </Accordion>
                <Accordion allowToggle w={["300px", "500px", "600px", "700px", "800px", "900px"]} mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="4"  >
                    <AccordionItem >
                        <h2>
                        <AccordionButton _expanded={{ bg: "orange.300", color: "white", borderRadius: "10px" }}>
                            <Box flex='1' textAlign='center' fontSize="1.6rem" fontWeight={"500"} >
                            <Text borderBottom="gray.300">Serviço de instalação de placa solar</Text>
                            </Box>
                            <AccordionIcon fontSize="1.6rem" />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel p="8" color="gray.500" fontSize="1.1rem" textAlign={["justify"]} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                        {/* <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Section 2 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel p="8" color="gray.500" fontSize="1.1rem" textAlign={["justify"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem> */}
                </Accordion>
            </Stack>
        </Flex>
    );
}