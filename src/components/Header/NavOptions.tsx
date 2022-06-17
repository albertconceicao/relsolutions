import { Flex, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink } from "./NavLink";


export const NavOptions = () => {
    return (
        <Flex>
            <HStack display="inline-block" spacing="6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/info">Quem somos</NavLink>
                <NavLink href="/services" >Serviços</NavLink>
                <NavLink href="/contact">Contato</NavLink>
            </HStack>
        </Flex>
    );
}