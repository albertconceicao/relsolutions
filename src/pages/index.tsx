import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, ListItem, Modal, ModalContent, ModalOverlay, SimpleGrid, Stack, Text, Textarea, UnorderedList, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
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
      <Flex direction="column" mx="auto" bg="gray.400" bgGradient="linear(to-b, orange.300, orange.700)">
        
        <Introduction />

        
        <Box mx="auto" my="40">
          <TextTitle content="Limpeza automatizada que traz mais eficiência energética" />

          {/* <TextContent content="Desenvolvemos uma forma independente de limpeza de placas solares que atendem grande parte das usinas fotovoltaicas, com agilidade, eficiência , e principalmente, com baixos custos.
            " /> */}
          <TextContent content="A limpeza dos painéis fotovoltaicos é fundamental para maior produção energética solar. Por isso, nós da REL SOLUTIONS, trouxemos para o Brasil uma solução inovadora, rápida e com baixos custos para limpeza de placas solares." />
          <TextContent content="Permitindo com que a operação de limpeza de placas solares seja mais segura, prática, mais produtiva e acessível para nossos clientes." />
          <TextContent content="Nosso sistema automatizado de limpeza permite que efetuemos uma operação mais rápida direcionada e eficaz, limpandos as placas solares em menor tempo e com maior eficácia." />
        </Box>

        

        <Box mx="auto" >
          <TextTitle content="Limpeza eficiente e controlada" />
          {/* <TextContent content="Nosso robô é de fácil montagem e alto rendimento de limpeza." /> */}
          <TextContent content="Utilizamos um sistema de limpeza que permite ter fácil montagem e alto rendimento em um menor tempo." />
        </Box>
          <Flex direction={["column","column","column","row"]} pl={["4","6","8","10"]} pr={["4","6","8","10"]} mx="auto" justify={"center"} mb="40">
                        
            <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["350px","38-px","300px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" mr={["","","","4"]} mt="40px" _hover={{
              transition: "0.6s",
              transform: "translateY(-0.5rem)",
              bg: "orange.200",
            }}>
              <Flex direction="column">
                <Icon as={BsPhoneFill} fontSize="3rem" mx="auto" my="auto" color="orange.600"
                
                />
                <Box my="auto">
                  {/* <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                  textAlign="center"
                  mt="5"
                  >Controle via aplicativo</Text> */}
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
                  {/* <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                  textAlign="center"
                  mt="5"
                  >Detecção de bordas</Text> */}
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
                  {/* <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                  textAlign="center"
                  mt="5"
                  >Autonomia</Text> */}
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
              </Flex>
            </Box>

            
          </Flex>
        



        <Box>
        
          <Flex direction="column">
            <Box mx="auto">
            </Box>
              <TextTitle content="Entre em contato e agende a sua limpeza conosco" />
                <Contact />
          </Flex>
        </Box>
      </Flex>
    </>
    
  )
}
