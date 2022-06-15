import { Flex, } from "@chakra-ui/react";

export const NavOptions = () => {
    return (
        <Flex>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contacts">Contatos</a>
                </li>
                <li>
                    <a href="/info">Quem somos</a>
                </li>
                <li>
                    <a href="/services">Serviços</a>
                </li>
            </ul>
        </Flex>
    );
}