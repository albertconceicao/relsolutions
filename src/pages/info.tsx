import { Box, Flex, Grid, GridItem, Icon, ListItem, SimpleGrid, Stack, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { GiFlyingTarget } from "react-icons/gi";
import { BoxContent } from "../components/BoxContent";


export default function Info () {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
    })

    
    {if(!isWideVersion) {
        return (
           
            <Flex direction={["column","column","row","row"]} mt="-100px" pl={["4","6","8","10"]} pr={["4","6","8","10"]} maxWidth={1400} mx="auto" justify={"center"}>
    
                    
                    <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["fit-content"]} mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="4" m="4" alignSelf="center">
                    <Flex>
                        <Icon as={GiFlyingTarget} />
                        <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.6rem"]} fontWeight={"500"}>Missão</Text>
                    </Flex>
                    <Text as="p"  p="8" color="gray.500" fontSize={["1.1rem"]}>
                        Nossa missão é desenvolver, buscar e aperfeiçoar metodologias tecnológicas, oferecendo maior agilidade e eficiência em nossos serviços, proporcionando  uma experiência única, sustentável e segura.
                    </Text>
                </Box>
                
                
                <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["320px"]} mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="4" m="4" alignSelf="center">
                    <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Visão</Text>
                    <Text as="p" p="8" color="gray.500" fontSize="1.1rem">
                        Oferecer  soluções tecnológicas agregadas aos nossos serviços.
                    </Text>
                </Box>
                
                
                <Box width={["230px", "250px", "280px", "310px", "350px"]} height="fit-content" mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="4" m="4" 
                alignSelf="center">
                    <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Valores</Text>
                    <UnorderedList textAlign={["justify"]} p="8" color="gray.500" fontSize="1.1rem">
                        <ListItem>Respeito ao cliente;</ListItem>
                        <ListItem>Zelo pelas pessoas que contribuem para o crescimento e desenvolvimento da REL Solutions;</ListItem>
                        <ListItem>Busca de soluções tecnológicas  de forma a aprimorar  processos;</ListItem>
                        <ListItem>Atendemos bem para atendermos sempre.</ListItem>
                    </UnorderedList>
                </Box>
                
            </Flex>     
    
        );
    } else {
        return (
            <Flex direction={["column","column","row","row"]} mt="-100px" pl={["4","6","8","10"]} pr={["4","6","8","10"]} maxWidth={1400} mx="auto" justify={"center"}>
    
                    
                <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["fit-content"]} mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="4" m="4" >
                <Flex>
                    <Icon as={GiFlyingTarget} />
                    <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.6rem"]} fontWeight={"500"}>Missão</Text>
                </Flex>
                    <Text as="p"  p="8" color="gray.500" fontSize={["1.1rem"]}>
                        Nossa missão é desenvolver, buscar e aperfeiçoar metodologias tecnológicas, oferecendo maior agilidade e eficiência em nossos serviços, proporcionando  uma experiência única, sustentável e segura.
                    </Text>
                </Box>
            
            
                <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["320px"]} mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="4" m="4" >
                    <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Visão</Text>
                    <Text as="p" p="8" color="gray.500" fontSize="1.1rem">
                        Oferecer  soluções tecnológicas agregadas aos nossos serviços.
                    </Text>
                </Box>
            
            
                <Box width={["230px", "250px", "280px", "310px", "350px"]} height="fit-content" mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="4" m="4" 
                >
                    <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Valores</Text>
                    <UnorderedList textAlign={["justify"]} p="8" color="gray.500" fontSize="1.1rem">
                        <ListItem>Respeito ao cliente;</ListItem>
                        <ListItem>Zelo pelas pessoas que contribuem para o crescimento e desenvolvimento da REL Solutions;</ListItem>
                        <ListItem>Busca de soluções tecnológicas  de forma a aprimorar  processos;</ListItem>
                        <ListItem>Atendemos bem para atendermos sempre.</ListItem>
                    </UnorderedList>
                </Box>
            
            </Flex>
        );
    }}

    
}