import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { ReactElement } from "react";

import { MotionBox } from '../../styles/animation';

interface BoxContentProps {
    width?: string;
    height?: string;
    children?: ReactElement;
    dataAos?: string;
}

export const BoxContent = ({width,height, children, dataAos }: BoxContentProps) => {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
    })
    const isMobileVersion = useBreakpointValue({
        base: false,
        sm: true
    })
    
        if(isWideVersion) {
            return (
                <MotionBox maxWidth={isWideVersion ? '80%' : width} maxH={`${height}`} mx="auto" my="20" textAlign={"center"} bg="white" boxShadow={["2xl"]} borderRadius="10px" p="4" data-aos={dataAos}>
                    <Box overflow="hidden">
                        {children}
                    </Box>
                </MotionBox>
            );
        } else {
            return (
            <MotionBox maxWidth={isWideVersion ? '80%' : width} maxH={`${height}`} textAlign={"center"} bg="white" boxShadow={["2xl"]} borderRadius="10px" m="4" p="4" mt="40px" data-aos={dataAos}>
                <Box overflowX="hidden">
                    {children}
                </Box>
            </MotionBox>
            );
        }
    
}