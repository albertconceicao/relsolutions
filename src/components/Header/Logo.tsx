import { Image as ChrakraImage } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    height: string;
    width: string;
}

export const Logo = ({height, width}: LogoProps) => {
    return (
        <Link href="/">
            <Image src="/logo-2.jpg" alt="logo" width={`${width}`} height={`${height}`}  style={{cursor: 'pointer', borderRadius: '50px'}}></Image>
            {/* <ChrakraImage borderRadius={[50]} src="/logo-2.jpg" alt="logo" width={`${width}`} height={`${height}`} cursor="pointer"/> */}
        </Link>
    );
}