import { Box, Text, AspectRatio } from "@chakra-ui/react";


export const Video = () => {
    return (
        <AspectRatio maxW="600px" h="400px" mx="auto" bg="gray.200" boxShadow={["2xl"]} borderRadius="10px" mb="4">
            {/* <Text>Vídeo</Text> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/izweuuCHy_U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
            frameBorder={0}/>
        </AspectRatio>
    );
}