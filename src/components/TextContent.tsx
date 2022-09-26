import { Text } from "@chakra-ui/react";


interface TextContentProps {
    content: string;
    justify?: boolean;
}

export const TextContent = ({content, justify}: TextContentProps) => {

    if(justify){
        return (
            <Text textAlign="justify" color="black" mx="4" maxW="1100px" m="7" fontSize={["1.2rem"]} fontWeight="bold" px="4">
              {content}
            </Text>
        );
    } else {

        return (
            <Text textAlign="center" color="black" mx="4" maxW="1100px" m="7" fontSize={["1.2rem"]} fontWeight="bold" px="4">
              {content}
            </Text>
        );
    }
}