import { Image } from "@chakra-ui/react";
import Link from "next/link";

interface LogoProps {
    height: string;
    width: string;
}

export const Logo = ({height, width}: LogoProps) => {
    return (
        <Link href="/">
            <Image borderRadius={[50]} src="/logo-2.jpg" alt="logo" width={`${width}`} height={`${height}`} cursor="pointer"/>
        </Link>
    );
}