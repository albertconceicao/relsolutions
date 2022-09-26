import { Box, Button, Image as ChakraImage, Flex, FormControl, FormLabel, Icon, Input, ListItem, Modal, ModalContent, ModalOverlay, SimpleGrid, Stack, Text, Textarea, UnorderedList, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";
import Head from 'next/head';
import Image from 'next/image';
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
import { Introduction } from "../components/Introduction";
import { TextTitle } from "../components/TextTitle";
import { TextContent } from "../components/TextContent";
import { Contact } from "../components/Contact";


export default function Home() {
  // const backgroundImage = <Image src="/robot-1.png"/>;

    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const isWideVersion = useBreakpointValue({
      base: "100%",
      xl: "50%",
    });
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
        <meta name="google-site-verification" content="3POAaN6syVqox0KfFC09ZsW7A0j64sTI8XIA13MxEVE" />
        <meta name="description" content="Limpeza eficiente e controlada de placas solares com baixo custo e alto rendimento."/>
        <meta name="keywords" content="REL solutions, rel solutions, limpeza solar, painel solar, limpeza de painel solar, limpeza de placas, limpeza de placas solares, placas solares"/>
        <link rel="icon" type="image/jpg" href="/logo-2.jpg"/>
      </Head>
      <Box bgGradient="linear(to-b, gray.200, gray.400)" >
        <Flex direction="column" mx="auto"  maxW="1400px">

          <Introduction />

          
          <BoxContent width="90%">
            <Flex justify="center" flexDirection="column" maxW="1440px">
              <TextTitle content="Limpeza automatizada que traz mais eficiência energética" />

              {/* <TextContent content="Desenvolvemos uma forma independente de limpeza de placas solares que atendem grande parte das usinas fotovoltaicas, com agilidade, eficiência , e principalmente, com baixos custos.
                " /> */}
                <Box mx="auto">

                  <TextContent justify content="A limpeza dos painéis fotovoltaicos é fundamental para maior produção energética solar. Por isso, nós da REL SOLUTIONS, trouxemos para o Brasil uma solução inovadora, rápida e com baixos custos para limpeza de placas solares." />
                  <TextContent justify content="Permitindo com que a operação de limpeza de placas solares seja mais segura, prática, mais produtiva e acessível para nossos clientes." />
                  <TextContent justify content="Nosso sistema automatizado de limpeza permite que efetuemos uma operação mais rápida direcionada e eficaz, limpandos as placas solares em menor tempo e com maior eficácia." />
                </Box>
                {/* <Button bg="orange.500" color="white" mr="2rem" onClick={onOpen}
                _hover={{
                  bg: "orange.600"
                }}
                >Ver vídeo</Button> */}
              <Box mx={["2rem","16rem"]} mr="0" mt="3rem">
                <Swiper
                      modules={[Navigation, Autoplay, Pagination, Lazy]}
                      slidesPerView={1}
                      spaceBetween={50}
                      onSlideChange={() => console.log('slide change')}
                      navigation={true}
                      autoplay={{delay: 5000}}
                      pagination={{
                        clickable: true,
                      }}
                      style={{
                        margin: '0 auto',
                        animationDelay: '0.5s',
                      }}
                      // centeredSlides
                      lazy
                      >
                        <SwiperSlide>
                          <ChakraImage borderRadius={8} src="./robot-1.png" maxW="700px" h="550px" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
                        </SwiperSlide>
                        <SwiperSlide>
                          <ChakraImage borderRadius={8} src="./robot-2.png" maxW="700px" h="550px" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
                        </SwiperSlide>
                        <SwiperSlide>
                          <ChakraImage borderRadius={8} src="./robot-3.png" maxW="700px" h="550px" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
                        </SwiperSlide>
                      
                </Swiper>
              </Box>  
              {/* <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent  bg="none">
                  <Video />
                </ModalContent>
              </Modal> */}
              
            </Flex>
          </BoxContent>

          

          
          
          <BoxContent width="90%">
            <Box>
              <TextTitle content="Limpeza eficiente e controlada" />
              <TextContent content="Utilizamos um sistema de limpeza que permite ter fácil montagem e alto rendimento em um menor tempo." />
              <SimpleGrid columns={2} mx="auto" my="3rem"  p="5" spacing={5}
              opacity={1}
              borderTop="1px solid gray"
              borderBottom="1px solid gray"
              >
                <Box mx="auto" my="auto">
                    <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                    textAlign="center"
                    mt="5"
                    >Conforto e praticidade</Text>
                    {/* <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                    >
                      O Robô da REL Solutions permite ser operado via aplicativo, fornecendo praticidade e conforto na operação.
                    </Text> */}
                    <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                    >
                      Alinhados com a tecnologia e inovação, transmitimos conforto e praticidade durante a operação de limpeza das placas.
                    </Text>
                </Box>
                <Box>
                  <Icon as={BsPhoneFill} fontSize="20rem" mx="auto" my="auto" color="orange.600"
                    
                  />
                </Box>
              </SimpleGrid>
                <SimpleGrid columns={2} mx="auto"  my="3rem" p="5" maxH="500px" spacing={5}
                opacity={1}
                borderBottom="1px solid gray"
                >
                  <Box >
                    <Icon as={BsFillShieldFill} fontSize="20rem" mx="auto" my="auto" color="orange.600"
                      
                    />
                  </Box>
                  <Box  mx="auto" my="auto">
                    <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                        textAlign="center"
                        mt="5"
                        >Segurança </Text>
                        {/* <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                        >
                          O Robô da REL Solutions conta com sensores que detectam as bordas das placas solares, protegendo as placas de danos durante a operação.
                        </Text> */}
                        <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                        >
                          Nosso método de limpeza traz mais segurança pois conta com sensores que detectam as bordas das placas solares, protegendo as placas de danos durante a operação.
                      </Text>
                  </Box>
                
                </SimpleGrid>

                <SimpleGrid columns={2} mx="auto" my="3rem" borderRadius={10} p="5" maxH="500px" spacing={5}
                opacity={1}
                
                >
                  
                  <Box  mx="auto" my="auto">
                      <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                      textAlign="center"
                      mt="5"
                      >Produtividade</Text>
                      {/* <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                      >
                        O Robô da REL Solutions conta com sistema de carregamento solar, permitindo sua operação com duração de 8 a 10 horas de limpeza.
                      </Text> */}
                      <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                      >
                        Nosso método de limpeza permite limpar mais placas em menor tempo, em operações que podem durar de 8 a 10 horas.
                      </Text>
                  </Box>
                  <Box>
                    <Icon as={BsBatteryCharging} fontSize="20rem" mx="auto" my="auto" color="orange.600"
                      
                    />
                  </Box>
                  
                </SimpleGrid>
              </Box>
            </BoxContent>

          
          
          


          <Box>
          
            <Flex direction="column">
              <BoxContent width="90%">
                <Box>
                  <SimpleGrid columns={2} mx="auto" m="2" borderRadius={10} p="5" spacing={5}
                  opacity={1}>
                    <Box >
                        <TextTitle content="Entre em contato e agende a sua limpeza conosco" />
                        <TextContent content="Colaboradores disponíveis em horário comercial com cotações acessíveis para sua empresa!" />
                        <TextContent content="Não perca tempo e garanto um cuidado eficaz e seguro para suas placas solares!" />

                    </Box>
                    <Box my="auto" >
                        <Contact />
                    </Box>

                  </SimpleGrid>
                </Box>
              </BoxContent>
            </Flex>
          </Box>
        </Flex>
        
      </Box>
    </>
    
  )
}
