import { Box, SimpleGrid, ModalOverlay, ModalContent, Text, useBreakpointValue, useDisclosure, Button, Modal } from "@chakra-ui/react"
// import { Button, Modal } from "react-bootstrap"
import { Video } from "./Video"

export const Introduction = () => {
    const isMobileVersion = useBreakpointValue({
        base: true,
        md: false,
      })
      const { isOpen, onOpen, onClose } = useDisclosure();
    return (

    <Box mx="auto"  w="100%" bgImage="url('/robot-1.png')" bgRepeat="no-repeat" bgSize="cover"
        opacity={1}
        >
          {/* <Swiper
          modules={[Navigation, Autoplay, Pagination, Lazy]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          autoplay={{delay: 5000}}
          pagination={{
            clickable: true,
          }}
          style={{
            // margin: '10px',
            animationDelay: '0.5s',
          }}
          centeredSlides
          lazy={true}
          >
            <SwiperSlide>
              <Image src="./robot-1.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares" opacity={0.5}/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="./robot-2.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="./robot-3.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
            </SwiperSlide>
          
          </Swiper> */}
          {!isMobileVersion ? (
            <SimpleGrid columns={2} mx="auto" m="2" borderRadius={10} p="5" maxH="500px" boxShadow="lg" spacing={5}
            opacity={1}
            >
        
              <Box as="h2" my="auto" ml="40px" boxShadow={["none"]} h="600px">
                <Text as="h1" w="100%" fontSize={["1.2rem","1.8rem","2rem","3rem"]} fontWeight="bold" textAlign="left" h="200px">
                  Automatize sua limpeza
                </Text>
              
    
                
              </Box>
              <Box w="100%" my="auto" h="580px">
                <Text as="p"  textAlign={["left", "justify"]} mt="1rem" fontSize={["1rem","1.4rem","1.4rem"]}   w="80%" ml="auto" fontWeight="bold"> 
                  A REL Solutions apresenta uma solução que atende as necessidades de uma limpeza eficaz, rápida e segura para suas placas solares.
                </Text>
                <Box mx={["2rem","7rem"]} mt="1rem" >
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
                </Modal>
              </Box>
          </SimpleGrid>
          ): (
            <Box w="100%" my="auto" h="580px">
                <Text as="p"  textAlign={["left", "justify"]} mt="1rem" fontSize={["1.8rem"]}   w="80%" ml="auto" fontWeight="bold"> 
                  A REL Solutions apresenta uma solução que atende as necessidades de uma limpeza eficaz, rápida e segura para suas placas solares.
                </Text>
                <Box mx={["2rem","7rem"]} mt="1rem" >
                  <Button bg="orange.500" color="white" mr="2rem" onClick={onOpen}
                  _hover={{
                    bg: "orange.600"
                  }}
                  >Ver vídeo</Button>
                </Box>  
                <Modal isOpen={isOpen} size="lg" onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent  bg="none">
                    <Video />
                  </ModalContent>
                </Modal>
              </Box>
          )
            
          }
          
    </Box>
    );  
}