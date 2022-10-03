import { HStack, Icon } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'

export const SocialMedia = () => {
    return (
        <HStack>
            <Icon fontSize="20" href="https://www.facebook.com/" color="white" as={RiInstagramFill} />
            <Icon fontSize="20" color="white" as={RiFacebookFill} />
            <Icon fontSize="20" color="white" as={RiWhatsappFill} />
            <Icon fontSize="20" color="white" as={RiLinkedinFill} />
            <Icon fontSize="20" color="white" as={RiYoutubeFill} />
        </HStack>
    );
}