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

        <BoxContent width={isMobileVersion ? '100%': '80%'} dataAos="zoom-in">

          <SimpleGrid columns={2} mx="auto" m={["0","2","2","2","2"]} borderRadius={10} p={["0","5","5","5","5"]} spacing={5}
          opacity={1} maxH={["50rem","50rem", "40rem","25rem"]}
          minChildWidth="300px" 
          // alignItems={"center"}
          >
      
            <Box as="h2" ml="40px" maxH="600px">

  
              
              <Box w="100%" my="auto">
                <Text as="h1" color="orange.600"  w="100%" fontSize={["1.2rem","1.8rem","2rem","3rem"]} fontWeight="bold" textAlign="left" maxH="200px">
                  Automatize sua limpeza
                </Text>
              
                <Text  as="p"  textAlign={["left", "justify"]} mt="1rem" fontSize={["1rem","1.4rem","1.4rem"]}   w="100%" ml="auto" fontWeight="bold"> 
                  A REL Solutions apresenta uma solução que atende as necessidades de uma limpeza eficaz, rápida e segura para suas placas solares.
                </Text>
                {/* <Box mx={["2rem","7rem"]} mt="1rem" >
                  <Button bg="orange.500" color="white" mr="2rem" onClick={onOpen}
                  _hover={{
                    bg: "orange.600"
                  }}
                  >Ver vídeo</Button>
                </Box>  
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent  bg="none">
                    <Video />
                  </ModalContent>
                </Modal> */}
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