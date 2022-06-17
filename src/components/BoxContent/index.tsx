import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface BoxContentProps {
    width?: string;
    height?: string;
    children?: ReactElement;
}

export const BoxContent = ({width,height, children }: BoxContentProps) => {
    return (
        <Box width={`${width}`} h={`${height}`} mx="auto" textAlign={"center"} bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" p="6">
            {children}
        </Box>
    );
}