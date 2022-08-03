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
            <Box bg="white" h="110px" >
    
                <Flex
                    as="header"
                    w="100%"
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
        );
    } else {

        return (
            <Box bg="white" h="130px">
    
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
        );
    }
}