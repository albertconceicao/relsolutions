import { Link as ChakraLink, LinkProps as ChakraLinkProps, useBreakpointValue } from '@chakra-ui/react';
import Link from "next/link";
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
    href: string;
    children: string;
}
export const NavLink = ({href, children, ...rest}:NavLinkProps) => {
    const isMobileVersion = useBreakpointValue({
        base: true,
        sm: false,
    })
    
    if (isMobileVersion) {
        return (
            <ActiveLink href={`${href}`} passHref>
            <ChakraLink color="white" textDecoration={"none"} p={["1","3"]} borderRadius={5}  fontSize={["0.8rem","1.1rem"]} 
             _hover={{
            textDecoration: "none",
            bg: "orange.800",
            }}  {...rest}
            >
                {children}
            </ChakraLink>
        </ActiveLink>
        );
    } else {
        return (
            <ActiveLink href={`${href}`} passHref>
                <ChakraLink textDecoration={"none"} p={["1","3"]} color="white" borderRadius={5}  fontSize={["0.8rem","1.1rem"]} 
                 _hover={{
                textDecoration: "none",
                bg: "orange.500",
                }}  {...rest}
                >
                    {children}
                </ChakraLink>
            </ActiveLink>
        );
    }
}