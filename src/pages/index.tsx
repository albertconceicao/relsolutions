import { useEffect } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos';

import { Box, Image as ChakraImage, Flex, Icon, SimpleGrid, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";
import Head from 'next/head';
import { BsPhoneFill, BsFillShieldFill, BsBatteryCharging } from 'react-icons/bs';


import { Swiper, SwiperSlide } from "swiper/react";
import { sendContactMail } from "../services/sendMail";


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
  Navigation, Pagination, Lazy
} from 'swiper';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { Introduction } from "../components/Introduction";
import { TextTitle } from "../components/TextTitle";
import { TextContent } from "../components/TextContent";
import { Contact } from "../components/Contact";
import { Footer } from '../components/Footer';


export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  },[])
  // const backgroundImage = <Image src="/robot-1.png"/>;

    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const isWideVersion = useBreakpointValue({
      base: false,
      md: true,
    });
    const isMobileVersion = useBreakpointValue({
      base: true,
      lg: false
    })
    console.log(isMobileVersion);
    
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
      <Box bgGradient="linear(to-b, gray.200, gray.400)"  >
        <Flex direction="column" mx="auto" pos="absolute" top="300px" right="0" bottom="0" left="0"  maxW="1400px" data-aos="fade-down">

          <Introduction />

          
          <BoxContent width="100%" dataAos='fade-up'>
            <Flex justify="center" flexDirection="column" maxW="1440px" w="100%" mx="auto">
                <TextTitle content="Limpeza automatizada que traz mais eficiência energética" />

                <Box>

                  <TextContent justify content="A limpeza dos painéis fotovoltaicos é fundamental para maior produção energética solar. Por isso, nós da REL SOLUTIONS, trouxemos para o Brasil uma solução inovadora, rápida e com baixos custos para limpeza de placas solares." />
                  <TextContent justify content="Permitindo com que a operação de limpeza de placas solares seja mais segura, prática, mais produtiva e acessível para nossos clientes." />
                  <TextContent justify content="Nosso sistema automatizado de limpeza permite que efetuemos uma operação mais rápida direcionada e eficaz, limpandos as placas solares em menor tempo e com maior eficácia." />
                </Box>
              
                {isWideVersion && (
                  <Box m={["0","0 3rem","0 3rem","0 5rem","0 10rem"]}  >
                    <Swiper
                          modules={[Navigation, Pagination, Lazy]}
                          slidesPerView={1}
                          spaceBetween={50}
                          onSlideChange={() => console.log('slide change')}
                          navigation={true}
                          // autoplay={{delay: 5000}}
                          pagination={{
                            clickable: true,
                          }}
                          style={{
                            // margin: '0 auto',
                            animationDelay: '0.5s',
                            width: '100%',
                            marginRight: 0,
                            flex: 1,
                            borderRadius: '0'
                          }}
                          // centeredSlides
                          lazy
                          >
                            <SwiperSlide>
                              <ChakraImage overflowX="hidden"borderRadius={8} src="./solar-1.jpg" maxW="800px" h="500px" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
                            </SwiperSlide>
                            <SwiperSlide>
                              <ChakraImage overflowX="hidden"borderRadius={8} src="./solar-4.jpg" maxW="800px" h="500px" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
                            </SwiperSlide>
                            <SwiperSlide>
                              <ChakraImage overflowX="hidden"borderRadius={8} src="./solar-3.jpg" maxW="800px" h="500px" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
                            </SwiperSlide>
                          
                    </Swiper>
                  </Box>  

                )}
                            
            </Flex>
          </BoxContent>

          

          
          
              <BoxContent width="100%" dataAos='zoom-in'>
                <Box overflowX="hidden">
                  <TextTitle content="Limpeza eficiente e controlada" />
                  <TextContent content="Utilizamos um sistema de limpeza que permite ter fácil montagem das ferramentas e alto rendimento da operação em um menor tempo." />
                </Box>
              </BoxContent>
              <BoxContent width="100%" dataAos={isMobileVersion ? 'flip-right' : 'fade-up-right'}>
                <Box overflowX="hidden" mt="-80px">
                <SimpleGrid columns={2} mx="auto" my="5rem"  p={["0","5","5","5","5"]} spacing={5}
                opacity={1}
                data-aos={isMobileVersion ? 'flip-right' : 'fade-left'}
                h={["25rem","22rem","22rem","15rem"]}
                minChildWidth="250px"
                >
                  <Box mx="auto" my="auto">
                      <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                      textAlign="center"
                      mt="5"
                      >Conforto e praticidade</Text>
                      <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                      >
                        Alinhados com a tecnologia e inovação, transmitimos conforto, otimização e praticidade durante a operação de limpeza das placas.
                      </Text>
                  </Box>
                  <Box mx="auto" my="auto">
                    <Icon as={BsPhoneFill} fontSize={["8rem", "10rem", "12rem", "15rem"]}  color="orange.600"
                      
                    />
                  </Box>
                </SimpleGrid>
                </Box>
              </BoxContent>

              <BoxContent width="100%" dataAos={isMobileVersion ? 'flip-left' : 'fade-up-left'}>
                <Box overflowX="hidden" mt="-80px">
                  <SimpleGrid columns={2} my="5rem" p={["0","5","5","5","5"]}  spacing={5}
                  opacity={1}
                  
                  data-aos={isMobileVersion ? 'flip-left' : 'fade-right'}
                  zIndex={20}
                  h={["25rem","22rem","22rem","15rem"]}
                  minChildWidth="250px"
                  >
                    <Box my="auto" mx="auto">
                      <Icon as={BsFillShieldFill} fontSize={["8rem", "10rem", "12rem", "15rem"]} color="orange.600"
                        
                      />
                    </Box>
                    <Box  my="auto">
                      <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                          textAlign="center"
                          >Segurança </Text>
                          
                          <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                          >
                            Nosso método de limpeza traz mais segurança pois conta com sensores que detectam as bordas das placas solares, protegendo as placas de danos durante a operação.
                        </Text>
                    </Box>
                  
                    </SimpleGrid>
                </Box>
              </BoxContent>
                
                
              <BoxContent width="100%" dataAos={isMobileVersion ? 'flip-right' : 'fade-up-right'}>
                <Box overflowX="hidden" mt="-80px">
                <SimpleGrid columns={2} mx="auto" my="5rem" borderRadius={10} p={["0","5","5","5","5"]}  spacing={5}
                opacity={1}
                data-aos={isMobileVersion ? 'flip-right' : 'fade-left'}
                zIndex={3}
                h={["25rem","22rem","22rem","15rem"]}
                minChildWidth="250px"
                >
                  
                  <Box my="auto">
                      <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                      textAlign="center"
                      // mt="5"
                      >Produtividade</Text>
                      {/* <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                      >
                        O Robô da REL Solutions conta com sistema de carregamento solar, permitindo sua operação com duração de 8 a 10 horas de limpeza.
                      </Text> */}
                      <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                      >
                        Nosso método de limpeza permite limpar mais placas solares em menor tempo, em operações de limpeza que podem durar de 8 a 10 horas.
                      </Text>
                  </Box>
                  <Box mx="auto" my="auto">
                    <Icon as={BsBatteryCharging} fontSize={["8rem", "10rem", "12rem", "15rem"]} color="orange.600"
                      
                    />
                  </Box>
                  
                  </SimpleGrid>
                </Box>
              </BoxContent>
            <Box  >
                
              
            </Box>
          

          
          
          


          <Box>
          
            <Flex direction="column">
              <BoxContent width="100%">
                <Box>
                  <SimpleGrid columns={2} mx="auto" m={["0","2","2","2","2"]} borderRadius={10} p={["0","5","5","5","5"]} spacing={5}
                  opacity={1} minChildWidth="250px">
                    <Box data-aos={isMobileVersion ? 'zoom-in-up' : 'fade-up-right'}>
                        <TextTitle content="Entre em contato e agende a sua limpeza conosco" />
                        <TextContent content="Colaboradores disponíveis em horário comercial com cotações acessíveis para sua empresa!" />
                        <TextContent content="Não perca tempo e garanto um cuidado eficaz e seguro para suas placas solares!" />

                    </Box>
                    <Box my="auto" data-aos={isMobileVersion ? 'zoom-in-out' : 'fade-up-left'}>
                        <Contact />
                    </Box>

                  </SimpleGrid>
                </Box>
              </BoxContent>
            </Flex>
          </Box>
        <Footer />
        </Flex>
      </Box>
    </>
    
  )
}
