import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import Link from "next/link";
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
    href: string;
    children: string;
}

export const NavLink = ({href, children, ...rest}:NavLinkProps) => {
    
    return (
        <ActiveLink href={`${href}`} passHref>
            <ChakraLink textDecoration={"none"} p={["1","3"]} borderRadius={5}  color="white" fontSize={["0.8rem","1rem"]} 
             _hover={{
            textDecoration: "none",
            bg: "orange.800",
            }} fontWeight="400" {...rest}
            >
                {children}
            </ChakraLink>
        </ActiveLink>
    );
}