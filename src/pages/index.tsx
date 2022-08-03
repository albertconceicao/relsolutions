import { Box, Button, Flex, FormControl, FormLabel, Icon, Image, Input, ListItem, Modal, ModalContent, ModalOverlay, SimpleGrid, Stack, Text, Textarea, UnorderedList, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";
import Head from 'next/head';

import { BsPhoneFill, BsFillShieldFill, BsBatteryCharging } from 'react-icons/bs';

import { Video } from "../components/Video";

import { Swiper, SwiperSlide } from "swiper/react";
import { sendContactMail } from "../services/sendMail";

import Card from 'react-bootstrap/Card';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/lazy";

// import "./styles.css";


// import Swiper core and required modules
import {
  Navigation, Pagination, Autoplay, Lazy
} from 'swiper';
import { GiFlyingTarget } from "react-icons/gi";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";


export default function Home() {

    const isMobileVersion = useBreakpointValue({
      base: true,
      md: false,
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        
        try {
            if (name === '' || email === '' || number === '' || message === '') {
              toast.error('Solicitação não enviada, por favor preencha todos os campos.');
              return;
            }
            await sendContactMail(name, email, message, number);
            setName('');
            setEmail('');
            setMessage('');
            toast.success('Email enviado com sucesso');
            
        } catch (error) {
            toast.error('Ocorreu um erro ao tentar enviar sua solicitação');
        }
    };
  // SwiperCore.use([Navigation, Autoplay, Pagination]);
  return (
    <>
      <Head>
        <title>REL Solutions - Página Inicial</title>
        <meta name="description" content="Limpeza eficiente e controlada de placas solares com baixo custo e alto rendimento."/>
        <meta name="keywords" content="relsolutions,limpeza solar, painel solar, limpeza de painel solar"></meta>
      </Head>
      <Flex direction="column" mx="auto" bg="gray.400" bgGradient="linear(to-b, orange.300, orange.700)">
        
        <Box mx="auto" maxW={1480} w="100%" bgImage="url('/robot-1.png')" bgRepeat="no-repeat" bgSize="cover"
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
                  A RelSolutions apresenta uma solução que atende as necessidades de uma limpeza eficaz, rápida e segura para suas placas solares.
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
                  A RelSolutions apresenta uma solução que atende as necessidades de uma limpeza eficaz, rápida e segura para suas placas solares.
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

      
        <Box mx="auto">

        </Box>
          <Text mx={["4"]} my="2rem" fontSize={["1.9rem","2rem","2.5rem"]} fontWeight="bold" textAlign="center" color="white"  opacity="1">Limpeza automatizada que traz mais eficiência energética</Text>
      <Box mx="auto">

        <Text textAlign="justify" color="white" maxW="900px" mx="4" fontSize={["1.2rem"]} fontWeight="bold" >
          Desenvolvemos uma forma independente de limpeza de placas solares que atendem grande parte das usinas fotovoltaicas, com agilidade, eficiência , e principalmente, com baixos custos.
          
          </Text>
      </Box>

      <Box mx="auto">

      </Box>
        <Text mx="4" my="2rem" fontSize={["1.9rem","2rem","2.5rem"]} fontWeight="bold" color="white" textAlign="center"> Limpeza eficiente e controlada</Text>

        <Box mx="auto">
          <Text textAlign="center" fontSize={["1.2rem"]} color="white" fontWeight="bold">
            Nosso robô é de fácil montagem, alto rendimento de limpeza.
          </Text>

          <Flex direction={["column","column","column","row"]} pl={["4","6","8","10"]} pr={["4","6","8","10"]} mx="auto" justify={"center"} >
        
                        
          <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["350px","38-px","300px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" mr={["","","","4"]} mt="40px" _hover={{
            transition: "0.6s",
            transform: "translateY(-0.5rem)",
            bg: "orange.200",
          }}>
            <Flex direction="column">
              <Icon as={BsPhoneFill} fontSize="3rem" mx="auto" my="auto" color="orange.600"
              
              />
              <Box my="auto">
                <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                textAlign="center"
                mt="5"
                >Controle via aplicativo</Text>
                <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                >
                  O Robô da RelSolutions permite ser operado via aplicativo, fornecendo praticidade e conforto na operação.
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["350px","38-px","300px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" mr={["","","","4"]} mt="40px" _hover={{
            transition: "0.6s",
            transform: "translateY(-0.5rem)",
            bg: "orange.200",
          }}>
            <Flex direction="column">
              <Icon as={BsFillShieldFill} fontSize="3rem" mx="auto" my="auto" color="orange.600"
              
              />
              <Box my="auto">
                <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                textAlign="center"
                mt="5"
                >Detecção de bordas</Text>
                <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                >
                  O Robô da RelSolutions conta com sensores que detectam as bordas das placas solares, protegendo as placas de danos durante a operação.
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["350px","38-px","300px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4"  mt="40px" _hover={{
            transition: "0.6s",
            transform: "translateY(-0.5rem)",
            bg: "orange.200",
          }}>
            <Flex direction="column">
              <Icon as={BsBatteryCharging} fontSize="3rem" mx="auto" my="auto" color="orange.600"
              
              />
              <Box my="auto">
                <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                textAlign="center"
                mt="5"
                >Autonomia</Text>
                <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                >
                  O Robô da RelSolutions conta com sistema de carregamento solar, permitindo sua operação com duração de 8 a 10 horas de limpeza.
                </Text>
              </Box>
            </Flex>
          </Box>

            
          </Flex>
        </Box>


        <Box>
        
          <Flex direction="column">
            <Box mx="auto">
            </Box>
              <Text mx="4" textAlign="center" my="2rem" fontSize={["1.9rem","2rem","2.5rem"]} fontWeight="bold" color="white">Entre em contato e agende a sua limpeza conosco</Text>

            <Stack spacing="8" mx="auto" mb="40px" >
                <BoxContent width="900px" height="580px">
                    <Box p="4" as="form" onSubmit={handleSubmitEmail} >
                        <Text as="h2" fontSize="1.5rem" fontWeight={"bold"}
                        mb="3"
                        >Solicite um orçamento</Text>
                        <FormControl w={["280px","390px","500px","800px"]} mx="auto" mt="4">
                              <Stack spacing="6">
                                  <Box>
                                      <FormLabel htmlFor='name'>Nome</FormLabel>
                                      <Input id='name'
                                      name="name" type='text'bg="gray.400"  w="100%"
                                      value={name}
                                      onChange={({target}) => setName(target.value)}
                                      />
                                  </Box>
                                  <Box>
                                      <FormLabel htmlFor='email'>Endereço de e-mail</FormLabel>
                                      <Input id='email'
                                      name="email" type='email'bg="gray.400"  
                                      value={email}
                                      onChange={({target}) => setEmail(target.value)}
                                      />
                                  </Box>
                                  <Box>
                                      <FormLabel htmlFor='number'>Telefone para contato</FormLabel>
                                      <Input id='number'
                                      name="number" type='text'bg="gray.400"  
                                      value={number}
                                      onChange={({target}) => setNumber(target.value)}
                                      />
                                  </Box>
                                  <Box>
                                      <FormLabel htmlFor='number'>Mensagem</FormLabel>
                                      <Textarea placeholder="Insira sua mensagem aqui" name="message" bg="gray.300" 
                                      value={message}
                                      onChange={({target}) => setMessage(target.value)}
                                      />                                     
                                  </Box>
                                  <Box>
                                      <Button w="100%" 
                                      bg="orange.700" color="white" _hover={{
                                          bg: "orange.600"
                                      }} type="submit"
                                      >Solicitar orçamento</Button>
                                  </Box>

                              </Stack>
                        </FormControl>
                    </Box>
                </BoxContent>
            </Stack>
          </Flex>
        </Box>
        
        <ToastContainer />
      </Flex>
    </>
    
  )
}
