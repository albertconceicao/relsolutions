import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { ReactElement } from "react";

interface BoxContentProps {
    width?: string;
    height?: string;
    children?: ReactElement;
}

export const BoxContent = ({width,height, children }: BoxContentProps) => {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
    })
    
        if(isWideVersion) {
            return (
                <Box maxWidth={`${width}`} maxH={`${height}`} mx="auto" textAlign={"center"} bg="white" boxShadow={["2xl"]} borderRadius="10px" p="4" mt="40px" >
                    {children}
                </Box>
            );
        } else {
            return (
            <Box maxWidth={`${width}`} maxH={`${height}`} textAlign={"center"} bg="white" boxShadow={["2xl"]} borderRadius="10px" m="4" p="4" mt="40px">
                {children}
            </Box>
            );
        }
    
}