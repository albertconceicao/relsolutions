import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavOptions } from "./NavOptions";
import { SocialMedia } from "./SocialMedia";
import { GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {

    const {onClose, onOpen, isOpen} = useDisclosure();

    const isDrawerHeader = useBreakpointValue({
        base: true,
        lg: false
    })

    if(isDrawerHeader) {
        return (
            <Box bg="orange.600" h="400px" >
    
                <Flex
                    as="header"
                    w="100%"
                    maxWidth={1080}
                    h="40"
                    mx="auto"
                    px="6"
                    align="center"
                    justify="space-around"            >
                        <Button colorScheme={'orange'} onClick={onOpen}>
                        <Icon as={GiHamburgerMenu} />
                        </Button>
                        <Logo />
                        <Flex
                        >
                            <SocialMedia />
                        </Flex>
                    </Flex>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                    {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
                    <DrawerBody bg="orange.600">
                        <NavOptions />
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        );
    } else {

        return (
            <Box bg="orange.600" h="400px">
    
                <Flex
                as="header"
                w="100%"
                maxWidth={1080}
                h="40"
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
}