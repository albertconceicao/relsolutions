import { HStack, Icon } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'

export const SocialMedia = () => {
    return (
        <HStack>
            <Icon fontSize="26" href="https://www.facebook.com/" color="orange.600" as={RiInstagramFill} />
            <Icon fontSize="26" color="orange.600" as={RiFacebookFill} />
            <Icon fontSize="26" color="orange.600" as={RiWhatsappFill} />
            <Icon fontSize="26" color="orange.600" as={RiLinkedinFill} />
            <Icon fontSize="26" color="orange.600" as={RiYoutubeFill} />
        </HStack>
    );
}