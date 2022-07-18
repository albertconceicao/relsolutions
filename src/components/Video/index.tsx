import { Box, Text, AspectRatio } from "@chakra-ui/react";


export const Video = () => {
    return (
        <AspectRatio w={["270px","450px","500px","600px"]} maxW={"600px"} h="400px" mx="auto" bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" my="4" >
            {/* <Text>Vídeo</Text> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SQQYS23XRK8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </AspectRatio>
    );
}