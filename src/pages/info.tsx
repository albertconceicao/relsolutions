import { Box, Flex, Icon, ListItem, SimpleGrid, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { GiCutDiamond } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { GoTelescope } from "react-icons/go";
import Head from "next/head";
import { FaSolarPanel, FaTools } from 'react-icons/fa';
import { BoxContent } from "../components/BoxContent";
import { TextTitle } from "../components/TextTitle";
import { TextContent } from "../components/TextContent";
import { Footer } from "../components/Footer";


export default function Info () {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
    })
    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false
    })

    
    
        return (
            <>
                <Head>
                    <title>REL Solutions - Quem Somos</title>
                    <meta name="description" content="Limpeza eficiente e controlada de placas solares com baixo custo e alto rendimento."/>
                    <meta name="keywords" content="relsolutions, limpeza solar, painel solar, limpeza de painel solar, limpeza de placas, limpeza de placas solares, placas solares"/>
                </Head>
                <Box bgGradient="linear(to-b, gray.200, gray.400)" >
                <Flex direction="column" mx="auto" pos="absolute" top="300px" right="0" bottom="0" left="0"  maxW="1400px" data-aos="fade-down">
                    <Box mt="-10rem">

                        <BoxContent width="100%" dataAos='zoom-in'>
                            <Box overflowX="hidden">
                                <TextTitle content="Quem somos?" />
                                <TextContent justify content="A REL Solutions  representa a inovação em limpeza, operação, manutenção e instalação de painéis fotovoltaicos. Nosso principal objetivo é promover soluções tecnológicas, através da limpeza automatizada dos painéis, e demais serviços, atendendo de forma rápida, prática, segura e eficaz." />
                                <TextContent justify content="Desenvolvemos uma forma independente de limpeza de placas solares que atendem grande parte das usinas fotovoltaicas, com agilidade, eficiência , e principalmente, com baixos custos." />
                                <TextContent justify content="Temos como principal objetivo oferecer soluções com alta tecnologia na área de usinas solares." />
                            </Box>
                        </BoxContent>
                    </Box>

                    <BoxContent width="100%" dataAos='zoom-in'>
                        <Box overflowX="hidden">
                        <TextTitle content="Nossa Missão, Visão e Valores" />
                        <TextContent content="Conheça mais sobre nossa Missão, Visão e Valores que regem a nossa organização e nos direcionam ao serviço de excelência." />
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
                            >Nossa missão</Text>
                            <Text as="p" p="4"  color="gray.500"
                            >
                                Nossa missão é desenvolver, buscar e aperfeiçoar metodologias tecnológicas, oferecendo maior agilidade e eficiência em nossos serviços, proporcionando  uma experiência única, sustentável e segura.
                            </Text>
                        </Box>
                        <Box mx="auto" my="auto">
                            <Icon as={FiTarget} fontSize={["8rem", "10rem", "12rem", "15rem"]}  color="orange.600"
                            
                            />
                        </Box>
                        </SimpleGrid>
                        </Box>
                    </BoxContent>

                    <BoxContent width="100%" dataAos={isMobileVersion ? 'flip-left' : 'fade-up-left'}>
                        <Box overflowX="hidden" mt="-80px">
                        <SimpleGrid columns={2} mx="auto" my="5rem"  p={["0","5","5","5","5"]} spacing={5}
                        opacity={1}
                        data-aos={isMobileVersion ? 'flip-left' : 'fade-right'}
                        h={["25rem","22rem","22rem","15rem"]}
                        minChildWidth="250px"
                        >
                            <Box my="auto" mx="auto">
                            <Icon as={GoTelescope} fontSize={["8rem", "10rem", "12rem", "15rem"]} color="orange.600"
                                
                            />
                            </Box>
                            <Box  my="auto">
                            <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                                textAlign="center"
                                >Nossa Visão </Text>
                                
                                <Text as="p" p="4"  color="gray.500"
                                >
                                Oferecer  soluções tecnológicas agregadas aos nossos serviços, solucionando as demandas diárias e repetitivas, trazendo um impacto positivo para nossos clientes e a sociedade.
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
                            >Nossos Valores</Text>
                            {/* <Text as="p" p="4"  color="gray.500"
                            >
                                O Robô da REL Solutions conta com sistema de carregamento solar, permitindo sua operação com duração de 8 a 10 horas de limpeza.
                            </Text> */}
                            <Text as="p" p="4"  color="gray.500"
                            >
                                Respeito ao cliente, zelo pelas pessoas que contribuem para o crescimento e desenvolvimento da REL Solutions, busca de soluções tecnológicas  de forma a aprimorar processos, tendo como prioridade a excelência no suporte e atendimento aos nossos clientes.
                            </Text>
                        </Box>
                        <Box mx="auto" my="auto">
                            <Icon as={GiCutDiamond} fontSize={["8rem", "10rem", "12rem", "15rem"]} color="orange.600"
                            
                            />
                        </Box>
                        
                        </SimpleGrid>
                        </Box>
                    </BoxContent>


                    <BoxContent width="100%" dataAos='zoom-in'>
                        <Box overflowX="hidden">
                        <TextTitle content="Nossos Serviços" />
                        <TextContent content="Conheça mais sobre os serviços que prestamos utilizando a limpeza automatizada de placas solares, além de outros serviços adicionais." />
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
                            >Limpeza de placa solar</Text>
                            <Text as="p" p="4"  color="gray.500"
                            >
                                Limpeza automatizada, segura, eficiente e otimizada de placas solares de prédios, parques, residências e indústrias que utilizam as placas solares para reter energia.
                            </Text>
                        </Box>
                        <Box mx="auto" my="auto">
                            <Icon as={FaSolarPanel} fontSize={["8rem", "10rem", "12rem", "15rem"]}  color="orange.600"
                            
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
                            <Icon as={FaTools} fontSize={["8rem", "10rem", "12rem", "15rem"]} color="orange.600"
                                
                            />
                            </Box>
                            <Box  my="auto">
                            <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                                textAlign="center"
                                >Instalação de placa solar </Text>
                                
                                <Text as="p" p="4"  color="gray.500"
                                >
                                Instalações certificadas e padronizadas, com profissionais treinados, regulamentados e com as exigências de segurança para a realização dos serviços.
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
                            >Limpeza e Manutenção predial</Text>
                            {/* <Text as="p" p="4"  color="gray.500"
                            >
                                O Robô da REL Solutions conta com sistema de carregamento solar, permitindo sua operação com duração de 8 a 10 horas de limpeza.
                            </Text> */}
                            <Text as="p" p="4"  color="gray.500"
                            >
                                Limpezas e serviços prediais, visando a excelência, rapidez e sustentabilidade do serviço, de acordo com as necessidades dos clientes.
                            </Text>
                        </Box>
                        <Box mx="auto" my="auto">
                            <Icon as={FaTools} fontSize={["8rem", "10rem", "12rem", "15rem"]} color="orange.600"
                            
                            />
                        </Box>
                        
                        </SimpleGrid>
                        </Box>
                    </BoxContent>
                    <Footer />
                </Flex>
                </Box>
            </>
        );
 

    
}