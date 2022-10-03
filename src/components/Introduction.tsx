import { Box, SimpleGrid, Image as ChakraImage, ModalOverlay, ModalContent, Text, useBreakpointValue, useDisclosure, Button, Modal, Icon } from "@chakra-ui/react"
import Image from "next/image";
// import { Button, Modal } from "react-bootstrap"
import { Video } from "./Video"
import { MdDryCleaning } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Lazy, Navigation, Pagination } from "swiper";
import { BoxContent } from "./BoxContent";

SwiperCore.use([Autoplay, Navigation, Pagination, Lazy])

export const Introduction = () => {
    const isMobileVersion = useBreakpointValue({
        base: true,
        md: false,
      })
    return (

    
      <Box mt="-10rem"> 

        <BoxContent width={isMobileVersion ? '100%': '80%'}>

          <SimpleGrid columns={2} mx="auto" m={["0","2","2","2","2"]} borderRadius={10} p={["0","5","5","5","5"]} spacing={5}
          opacity={1} maxH={["50rem","50rem", "40rem","25rem"]}
          minChildWidth="300px" 
          >
      
            <Box as="h2" maxH="600px" p="2rem 0 ">

  
              
              <Box w="100%" my="auto">
                <Text as="h1" color="orange.600"  w="100%" fontSize={["1.7rem","2rem","2.7rem"]} fontWeight="bold" textAlign="center" maxH="200px" >
                  Automatize sua limpeza
                </Text>
              
                <Text  as="p"  textAlign={["justify"]} mt="4rem" fontSize={["1.1rem"]} w="100%"> 
                  A REL Solutions apresenta uma solução que atende as necessidades de uma limpeza eficaz, rápida e segura para suas placas solares.
                </Text>
               
              </Box>
            </Box>

            <Box mx="auto" maxW={380}>
              <Video />
            </Box>
          </SimpleGrid>
        </BoxContent>
      </Box>
           
          
            
          
          
   
    );  
}