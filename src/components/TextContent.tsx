import { Text } from "@chakra-ui/react";


interface TextContentProps {
    content: string;
}

export const TextContent = ({content}: TextContentProps) => {
    return (
        <Text textAlign="justify" color="white" maxW="1100px" m="4" fontSize={["1.2rem"]} fontWeight="bold" px="4">
          {content}
        </Text>
    );
}