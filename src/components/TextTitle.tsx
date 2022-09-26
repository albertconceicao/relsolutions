import { Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TextTitleProps {
    content: string;
    textWhite?: boolean;
}

export const TextTitle = ({content, textWhite}: TextTitleProps) => {
    if(textWhite) {
        return (
            <Text mx="4" my="2rem" fontSize={["1.9rem","2rem","2.5rem"]} fontWeight="bold" textAlign="center" color="white"  >{content}</Text>
        );
        
    } else {
        return (
            <Text mx="4" my="2rem" fontSize={["1.9rem","2rem","2.5rem"]} fontWeight="bold" textAlign="center" color="orange.600"  >{content}</Text>
        );
    }
}