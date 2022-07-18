import { Flex, Link as ChakraLink, Text, Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiBuilding4Fill, RiHome3Fill, RiPhoneFill } from "react-icons/ri";
import {BsPeopleFill} from 'react-icons/bs'

export const Footer = () => {
    return (
        <Box>

            <Flex direction={["column","row","row","row"]} pl={["4","6","8","10"]} pr={["4","6","8","10"]} mx="auto" justify={"space-evenly"} bg="white" fontWeight={"400"} mt="1rem" >
                
                <Flex direction={"column"} mb="1.2rem" >
                    <Flex justify="space-between" borderBottom={"1px solid"} borderBottomColor="gray.300" color="orange.600" fontSize={"1.3rem"} mb="1.2rem" >
                        <Text as="h3" fontWeight="600" >Redes sociais</Text>
                        <Icon as={BsPeopleFill} mt="0.3rem" ml="0.5rem"/>
                    </Flex>
                    <ChakraLink as="li" textDecoration={"none"} style={{
                        listStyle: "none"
                    }} _hover={{
                        textDecoration: "none"
                    }}fontWeight={"bold"}>
                        <Link href='/'>Facebook</Link>
                    </ChakraLink>
                    <ChakraLink as="li" textDecoration={"none"} style={{
                        listStyle: "none"
                    }} _hover={{
                        textDecoration: "none"
                    }} target="_blank" fontWeight={"bold"}>
                        <Link href="https://wa.me/5571993364034?text=Olá, desejo saber mais sobre esse serviço que vi no site">WhatsApp</Link>
                    </ChakraLink>
                    <ChakraLink as="li" textDecoration={"none"} style={{
                        listStyle: "none"
                    }} _hover={{
                        textDecoration: "none"
                    }} fontWeight={"bold"}>
                        <Link href='/services'>LinkedIn</Link>
                    </ChakraLink>
                    <ChakraLink as="li" textDecoration={"none"} style={{
                        listStyle: "none"
                    }} _hover={{
                        textDecoration: "none"
                    }} fontWeight={"bold"}>
                        <Link href='/contact'>Youtube</Link>
                    </ChakraLink>
                </Flex>
                <Flex direction={"column"} textTransform={"capitalize"} mb="1rem">
                    <Flex justify="space-between" borderBottom={"1px solid"} borderBottomColor="gray.300" color="orange.600" mb="1.2rem" >
                        <Text as="h3" fontSize={"1.3rem"} fontWeight="600">Endereço</Text>
                        <Icon as={RiHome3Fill} mt="0.5rem" ml="0.5rem"/>
                    </Flex>
                    <Text fontWeight={"bold"}>contato: (11) 9931-9591</Text>
                    <Text fontWeight={"bold"}>Rua Celina, Vila Esperança</Text>
                    <Text fontWeight={"bold"}></Text>
                    <Text fontWeight={"bold"}>São Paulo - SP</Text>
                </Flex>
                <Flex direction={"column"} textTransform={"capitalize"} mb="1rem">
                    <Flex justify="space-between" borderBottom={"1px solid"} borderBottomColor="gray.300" color="orange.600" mb="1.2rem">
                        <Text as="h3"  fontSize={"1.3rem"} fontWeight="600" >Contato</Text>
                        <Icon as={RiPhoneFill} mt="0.5rem" ml="0.5rem"/>
                    </Flex>
                    <Text fontWeight={"bold"}>contato: (11) 9931-9591</Text>
                    
                </Flex>
                <Flex direction={"column"} textTransform={"capitalize"} mb="1rem">
                    <Flex justify="space-between" borderBottom={"1px solid"} borderBottomColor="gray.300" color="orange.600" mb="1.2rem" >
                        <Text as="h3" fontSize={"1.3rem"} fontWeight="600" >RelSolutions</Text>
                        <Icon as={RiBuilding4Fill} mt="0.5rem" ml="0.5rem"/>
                    </Flex>
                    <Text fontWeight={"bold"}>CNPJ - 44.435.919/0001-83</Text>
                    
                </Flex>
            </Flex>
            <Flex direction={"column"} textTransform={"capitalize"} fontWeight={"600"} my="20px">
                <Text mx="auto" as="small" >Desenvolvido por <Text as="strong" color="orange.600" >Concept Solutions</Text ></Text>
            </Flex>
        </Box>
    );

}