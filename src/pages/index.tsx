import { Box, Button, Flex, FormControl, FormLabel, Icon, Image, Input, ListItem, SimpleGrid, Stack, Text, Textarea, UnorderedList } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";
import { FaSolarPanel, FaTools } from 'react-icons/fa';

import { Video } from "../components/Video";

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
  Navigation, Pagination, Autoplay, Lazy
} from 'swiper';
import { GiFlyingTarget } from "react-icons/gi";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


export default function Home() {

  const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        
        try {
            if (name === '' || email === '' || number === '' || message === '') {
              toast.error('Todos os campos precisam ser preenchidos');
              return;
            }
            await sendContactMail(name, email, message, number);
            setName('');
            setEmail('');
            setMessage('');
            toast.success('Email enviado com sucesso');
            // toast('Email enviado com sucesso', {
            //     autoClose: 2000,
            //     style: {
            //         background: '#f5b489',
            //         color: 'black',
            //     },
                
            // });
        } catch (error) {
            toast.error('Ocorreu um erro ao tentar enviar sua solicitação');
        }
    };
  // SwiperCore.use([Navigation, Autoplay, Pagination]);
  return (
    <Flex direction="column" mx="auto" bg="gray.400">
      
      <Box mx="auto" maxW={1480} w="100%" >
        <Swiper
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
            <Image src="./robot-1.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./robot-2.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./robot-3.png" w="100%" alt="Imagem do Robô da RelSolutions limpando placas solares"/>
          </SwiperSlide>
        
        </Swiper>
      </Box>
      <SimpleGrid columns={2} minChildWidth="450px" mx="auto" bg="white" m="4" borderRadius={10} p="5" maxH="500px" boxShadow="lg">
        {/* <BoxContent width="800px" height="300px">
        </BoxContent> */}
          <Box as="h2" my="auto" ml="40px" boxShadow={["none"]}>
            <Text as="h1" w="600px" h="120px"fontSize="3.2rem" fontWeight="bold" textAlign="left">
              Automatize sua limpeza
            </Text>
            <Text as="p"  textAlign="justify" mt="1rem" fontSize="1.2rem"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat corporis tempora ducimus eius possimus quaerat modi odio neque magnam aperiam illum, numquam unde nesciunt voluptates reprehenderit, suscipit explicabo totam!
            </Text>
          </Box>
        <Video />
      </SimpleGrid>

      <Text mx="auto" my="2rem" fontSize="2rem" fontWeight="bold">Serviços</Text>

      <Box>
        <Flex direction={["column","column","row","row"]} pl={["4","6","8","10"]} pr={["4","6","8","10"]} mx="auto" justify={"center"}  bg="gray.400">
      
                      
        <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["fit-content"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" m="4" mt="40px" _hover={{
          transition: "0.6s",
          transform: "translateY(-0.5rem)",
          bg: "orange.200",
        }}>
          <Flex direction="column">
            <Icon as={FaSolarPanel} fontSize="3rem" mx="auto" my="auto" color="orange.600"
            
            />
            <Box my="auto">
              <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
              textAlign="center"
              mt="5"
              >Limpeza de placa solar</Text>
              <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
              >
                Limpeza automatizada de placas solares
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["fit-content"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" m="4" mt="40px" _hover={{
          transition: "0.6s",
          transform: "translateY(-0.5rem)",
          bg: "orange.200",
        }}>
          <Flex direction="column">
            <Icon as={FaTools} fontSize="3rem" mx="auto" my="auto" color="orange.600"
            
            />
            <Box my="auto">
              <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
              textAlign="center"
              mt="5"
              >Instalação de placa solar</Text>
              <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
              >
                Instalações certificados e padronizadas.
              </Text>
            </Box>
          </Flex>
        </Box>

          
        </Flex>
      </Box>

      <Box>
        <Flex bg="gray.400">

          <Stack spacing="8" mx="auto" mb="40px" >
              <BoxContent width="600px" height="580px">
                  <Box p="4" as="form" onSubmit={handleSubmitEmail} >
                      <Text as="h2" fontSize="1.5rem" fontWeight={"bold"}
                      mb="3"
                      >Solicite um orçamento</Text>
                      <FormControl maxW="400px" mx="auto" mt="4">
                          <Stack spacing="6">
                              <Box>
                                  <FormLabel htmlFor='name'>Nome</FormLabel>
                                  <Input id='name'
                                  name="name" type='text'bg="gray.400" maxW={"340px"} 
                                  value={name}
                                  onChange={({target}) => setName(target.value)}
                                  />
                              </Box>
                              <Box>
                                  <FormLabel htmlFor='email'>Endereço de e-mail</FormLabel>
                                  <Input id='email'
                                  name="email" type='email'bg="gray.400" maxW={"340px"} 
                                  value={email}
                                  onChange={({target}) => setEmail(target.value)}
                                  />
                              </Box>
                              <Box>
                                  <FormLabel htmlFor='number'>Telefone para contato</FormLabel>
                                  <Input id='number'
                                  name="number" type='text'bg="gray.400" maxW={"340px"} 
                                  value={number}
                                  onChange={({target}) => setNumber(target.value)}
                                  />
                              </Box>
                              <Box>
                                  <FormLabel htmlFor='message'>Mensagem</FormLabel>
                                  <Textarea placeholder="Insira sua mensagem aqui" name="message" bg="gray.300" maxW={"340px"}
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
          <ToastContainer />
        </Flex>
      </Box>
      
    </Flex>
    
  )
}
