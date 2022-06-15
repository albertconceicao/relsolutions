import { HStack, Icon } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri'

export const SocialMedia = () => {
    return (
        <HStack>
            <Icon fontSize="20" as={RiInstagramFill} />
            <Icon fontSize="20" as={RiFacebookFill} />
            <Icon fontSize="20" as={RiWhatsappFill} />
            <Icon fontSize="20" as={RiLinkedinFill} />
            <Icon fontSize="20" as={RiYoutubeFill} />
        </HStack>
    );
}