import { Box, Text, AspectRatio, useBreakpointValue } from "@chakra-ui/react";


export const Video = () => {
    const isMobileVersion = useBreakpointValue({
        base: true, 
        md: false,
    })
    return (
        
        <AspectRatio w={["250px","300px","330px","380px","450px"]} mx="auto"  maxW={"450px"} maxH="600px" borderRadius="10px" my="4" >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SQQYS23XRK8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </AspectRatio>
    );
    if (isMobileVersion) {

    } else {
        return (
            
            <AspectRatio w={["270px","450px","450px"]} mx="-20" maxW={"600px"} maxH="500px" borderRadius="10px" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SQQYS23XRK8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </AspectRatio>
        );
    }
}