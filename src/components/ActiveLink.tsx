import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
}

export const ActiveLink = ({children, ...rest}: ActiveLinkProps) => {
    const { asPath } = useRouter();

    let isActive = false;

    if(asPath === rest.href || asPath === rest.as) {
        isActive = true;
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