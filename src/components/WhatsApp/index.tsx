import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { RiWhatsappFill } from "react-icons/ri";

export const WhatsApp = () => {
    return (
        <Link href="https://wa.me/5571996850880?text=Eu desejo saber mais sobre esse serviço" 
        _hover={{
            textDecoration: "none",
        }}
        target="_blank"
        >
                <Icon as={RiWhatsappFill} fontSize="3rem" color="green" position="fixed" width="70px" height="65px" bottom="20px" right="20px"borderRadius={50} textAlign="center" boxShadow={"dark-lg"} zIndex="1000" />
            <Flex mt="3">
                {/* <Text alignSelf="center" color="white">WhatsApp</Text> */}
            </Flex>
        </Link>
    );
}