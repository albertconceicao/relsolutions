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
            <>
            
                <Box bg="orange.400" h="7.4rem" pos="fixed" maxW="100%" top="0" right="0" left="0" zIndex={999}>
        
                    <Flex
                        as="header"
                        w="80%"
                        maxWidth={1080}
                        h="32"
                        mx="auto"
                        px="6"
                        align="center"
                        justify="space-between"            >
                            <Button colorScheme={'orange'} onClick={onOpen}>
                                <Icon as={GiHamburgerMenu} />
                            </Button>
                            <Logo height="75px" width="75px"/>
                            {/* <Flex
                            >
                                <SocialMedia />
                            </Flex> */}
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
                <Box bg="orange.400" h="13.7rem" maxW="100%" margin="0" padding="0" pos="fixed" top="7.3rem" right="0" left="0">

                </Box>
            </>
        );
    } else {

        return (
            <>
            
                <Box bg="orange.400" h="7.3rem" pos="fixed" w="100%" top="0" right="0" left="0" zIndex={999}>
        
                    <Flex
                    as="header"
                    w="100%"
                    maxWidth={1080}
                    h="32"
                    mx="auto"
                    px="6"
                    align="center"
                    justify="space-between"            
                    >
                        <Logo height="100px" width="100px"/>
                        <Flex>
        
                            <NavOptions />
                        </Flex>
                        <Flex
                        >
                            <SocialMedia />
                        </Flex>
                    </Flex>
                </Box>
                <Box bg="orange.400" h="13.7rem" w="100%" margin="0" padding="0" pos="fixed" top="7.3rem" right="0" left="0">

                </Box>
            </>
        );
    }
}