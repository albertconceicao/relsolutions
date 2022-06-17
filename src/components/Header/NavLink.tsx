import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import Link from "next/link";
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
    href: string;
    children: string;
}

export const NavLink = ({href, children, ...rest}:NavLinkProps) => {
    return (
        // <Link href={`/${href}`}><ChakraLink textDecoration={"none"} p="2" borderRadius={5}  color="white" fontSize={["1.4rem"]} _hover={{
        //     textDecoration: "none",
        //     color: "yellow.400",
        // }} fontWeight="500">{`${name}`}</ChakraLink></Link>
        <ActiveLink href={`${href}`} passHref>
            <ChakraLink textDecoration={"none"} p="2" borderRadius={5}  color="white" fontSize={["1.4rem"]} _hover={{
            textDecoration: "none",
            }} fontWeight="500" {...rest}
            >
                {children}
            </ChakraLink>
        </ActiveLink>
    );
}