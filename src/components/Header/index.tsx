import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavOptions } from "./NavOptions";
import { SocialMedia } from "./SocialMedia";

export const Header = () => {
    return (
        <Box bg="orange.600" h="400px">

            <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="60"
            mx="auto"
            px="6"
            align="center"
            justify="space-between"            >
                <Logo />
                <Flex>

                    <NavOptions />
                </Flex>
                <Flex
                >
                    <SocialMedia />
                </Flex>
            </Flex>
        </Box>
    );
}