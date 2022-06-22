import { Box, Flex, Grid, GridItem, ListItem, SimpleGrid, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";

export default function Info () {
    return (
        <SimpleGrid columns={3} minChildWidth="380px" mt="-80px" gap="10" pl={["4","6","8","10"]} pr={["4","6","8","10"]} maxWidth={1400} mx="auto">

            <BoxContent width={"400px"} height="320px">
                <Box>
                    <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.6rem"]} fontWeight={"500"}>Missão</Text>
                    <Text as="p"  p="8" color="gray.500" fontSize={["0.8rem","0.9rem","1rem","1.1rem"]}>
                        Nossa missão é desenvolver, buscar e aperfeiçoar metodologias tecnológicas, oferecendo maior agilidade e eficiência em nossos serviços, proporcionando  uma experiência única, sustentável e segura.
                    </Text>
                </Box>
            </BoxContent>
            
            <BoxContent width="400px" height="320px">
                <Box>
                    <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Visão</Text>
                    <Text as="p" p="8" color="gray.500" fontSize="1.1rem">
                        Oferecer  soluções tecnológicas agregadas aos nossos serviços.
                    </Text>
                </Box>
            </BoxContent>
            
            <BoxContent width="400px" height="320px">
                <Box>
                    <Text as="h2" fontSize="1.6rem" fontWeight={"500"}>Valores</Text>
                    <UnorderedList textAlign={["justify"]} p="8" color="gray.500" fontSize="1.1rem">
                        <ListItem>Respeito ao cliente;</ListItem>
                        <ListItem>Zelo pelas pessoas que contribuem para o crescimento e desenvolvimento da REL Solutions;</ListItem>
                        <ListItem>Busca de soluções tecnológicas  de forma a aprimorar  processos;</ListItem>
                        <ListItem>Atendemos bem para atendermos sempre.</ListItem>
                    </UnorderedList>
                </Box>
            </BoxContent>
            
            
        </SimpleGrid>

    );
}