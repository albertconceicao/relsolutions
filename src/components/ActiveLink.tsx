import { useBreakpointValue } from "@chakra-ui/react";
import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
}

export const ActiveLink = ({children, ...rest}: ActiveLinkProps) => {
    const { asPath } = useRouter();

    const isWideVersion = useBreakpointValue({
        base: true,
        md: false,
    })

    let isActive = false;

    if(asPath === rest.href || asPath === rest.as) {
        isActive = true;
    }
    
    if (isWideVersion) {
        return (
            <Link {...rest}>
            {cloneElement(children, {
                // color: isActive ? 'yellow.400' : 'white',
                bg: isActive ? 'orange.800' : 'none'
            })}
        </Link>
        );
    }
    return (
        <Link {...rest}>
            {cloneElement(children, {
                // color: isActive ? 'yellow.400' : 'white',
                bg: isActive ? 'gray.300' : 'none'
            })}
        </Link>
    );
}