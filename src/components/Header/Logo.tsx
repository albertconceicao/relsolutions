import { Image } from "@chakra-ui/react";

interface LogoProps {
    height: string;
    width: string;
}

export const Logo = ({height, width}: LogoProps) => {
    return (
        <Image borderRadius={[50]} src="/logo.jpeg" alt="logo" width={`${width}`} height={`${height}`} />
    );
}