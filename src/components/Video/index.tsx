import { Box, Text, AspectRatio, useBreakpointValue } from "@chakra-ui/react";


export const Video = () => {
    const isMobileVersion = useBreakpointValue({
        base: true, 
        md: false,
    })
    if (isMobileVersion) {

        return (
            
            <AspectRatio w={["270px","450px","500px","600px"]} mx="auto"  maxW={"600px"} maxH="600px" borderRadius="10px" my="4" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SQQYS23XRK8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </AspectRatio>
        );
    } else {
        return (
            
            <AspectRatio w={["270px","450px","500px","600px"]} mx="-20" maxW={"600px"} maxH="600px" borderRadius="10px" my="4" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SQQYS23XRK8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </AspectRatio>
        );
    }
}