import { Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TextTitleProps {
    content: string;
}

export const TextTitle = ({content}: TextTitleProps) => {
    return (
        <Text mx="4" my="2rem" fontSize={["1.9rem","2rem","2.5rem"]} fontWeight="bold" textAlign="center" color="white"  >{content}</Text>
    );
}