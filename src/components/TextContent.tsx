import { Text } from "@chakra-ui/react";


interface TextContentProps {
    content: string;
    justify?: boolean;
}

export const TextContent = ({content, justify}: TextContentProps) => {

    if(justify){
        return (
            <Text textAlign="justify" fontSize="1.1rem" mx={["0","4","4","4","4","4"]} maxW="1100px" m={["0","7","7","7","7"]} px={["0", "4", "4", "4", "4"]}>
              {content}
            </Text>
        );
    } else {

        return (
            <Text textAlign="center" fontSize="1.1rem" mx={["0","4","4","4","4","4"]} maxW="1100px" m={["0","7","7","7","7"]} px={["0", "4", "4", "4", "4"]}>
              {content}
            </Text>
        );
    }
}