import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { RiWhatsappFill } from "react-icons/ri";

export const WhatsApp = () => {
    return (
        <Link href="https://wa.me/5571993364034?text=Olá, desejo saber mais sobre esse serviço que vi no seu site da REL Solutions" 
        _hover={{
            textDecoration: "none",
        }}
        target="_blank"
        >
                <Icon as={RiWhatsappFill} fontSize="3rem" color="green" position="fixed" width="70px" height="65px" bottom="20px" right="20px"borderRadius={50} textAlign="center" boxShadow={"dark-lg"} zIndex="1000" opacity={"0.9"} />
            <Flex mt="3">
                {/* <Text alignSelf="center" color="white">WhatsApp</Text> */}
            </Flex>
        </Link>
    );
}