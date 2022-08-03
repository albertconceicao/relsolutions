import { Box, Flex, Icon, ListItem, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { GiCutDiamond } from "react-icons/gi";
import { FiTarget } from "react-icons/fi";
import { GoTelescope } from "react-icons/go";

import { FaSolarPanel, FaTools } from 'react-icons/fa';


export default function Info () {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
    })

    
    {if(!isWideVersion) {
        return (
           
            <Flex direction={["column","column","row","row"]} pl={["4","6","8","10"]} pr={["4","6","8","10"]} mx="auto" justify={"center"} bgGradient="linear(to-b, orange.300, orange.700)">
    
                                    
                    <Box mx="auto">

                <Text my="2rem" fontSize={["1.9rem","2rem","2.5rem"]}  fontWeight="bold" textAlign="center" color="white">Quem somos?</Text>

                    <Text textAlign="justify" color="white" maxW="900px" mx="auto" fontSize={["1.1rem","1.2rem"]} fontWeight="bold" >
                        A REL Solutions  representa a inovação em limpeza, operação, manutenção e instalação de painéis fotovoltaicos. <br /> <br /> Nosso principal objetivo é promover soluções tecnológicas, através da limpeza automatizada dos painéis, e demais serviços, atendendo de forma rápida, prática, segura e eficaz. <br /> <br />
                        Desenvolvemos uma forma independente de limpeza de placas solares que atendem grande parte das usinas fotovoltaicas, com agilidade, eficiência , e principalmente, com baixos custos. <br /> <br />
                        Temos como principal objetivo oferecer soluções com alta tecnologia na área de usinas solares.
                    </Text>

                </Box>

                <Text mx="auto" my="4rem" fontSize={["1.9rem","2rem","2.5rem"]} fontWeight="bold" color="white">Missão, Visão e Valores</Text>

                <Box>
                <Flex justify="center" direction="column">
                    <Box width={["230px", "250px", "280px", "310px", "350px"]} height="500" mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4"  _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                        bgGradient: "linear(to-b, white, orange.100)"
                    }}
                    >
                        <Flex direction="column">
                        <Icon as={FiTarget} fontSize="3rem" mx="auto" my="auto" color="orange.600"
                        
                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1.3rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                            textAlign="center"
                            mt="5"
                            >Nossa Missão</Text>
                            <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                            >
                            Nossa missão é desenvolver, buscar e aperfeiçoar metodologias tecnológicas, oferecendo maior agilidade e eficiência em nossos serviços, proporcionando  uma experiência única, sustentável e segura.
                            </Text>
                        </Box>
                        </Flex>
                    </Box>

                    <Box width={["230px", "250px", "280px", "310px", "350px"]} height="500" mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" mt="40px" _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                    }}>
                        <Flex direction="column">
                        <Icon as={GoTelescope} fontSize="3rem" mx="auto" my="auto" color="orange.600"
                        
                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1.3rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                            textAlign="center"
                            mt="5"
                            >Nossa Visão</Text>
                            <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                            >
                            Oferecer  soluções tecnológicas agregadas aos nossos serviços.
                            </Text>
                        </Box>
                        </Flex>
                    </Box>
                    <Box width={["230px", "250px", "280px", "310px", "350px"]} height="500" mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" mt="40px" _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                    }}>
                        <Flex direction="column">
                        <Icon as={GiCutDiamond} fontSize="3rem" mx="auto" my="auto" color="orange.600"
                        
                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1.3rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                            textAlign="center"
                            mt="5"
                            >Nossos Valores</Text>
                            <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                            >
                                Respeito ao cliente. <br /> 
                                Zelo pelas pessoas que contribuem para o crescimento e desenvolvimento da REL Solutions;
                                <br />
                                Busca de soluções tecnológicas  de forma a aprimorar  processos;
                                <br />
                                Atendemos bem para atendermos sempre.
                            {/* <UnorderedList textAlign={["justify"]} p="8" color="gray.500" fontSize="1.1rem">
                            <ListItem>Respeito ao cliente;</ListItem>
                            <ListItem>Zelo pelas pessoas que contribuem para o crescimento e desenvolvimento da REL Solutions;</ListItem>
                            <ListItem>Busca de soluções tecnológicas  de forma a aprimorar  processos;</ListItem>
                            <ListItem>Atendemos bem para atendermos sempre.</ListItem>
                        </UnorderedList> */}
                            </Text>
                        </Box>
                        </Flex>
                    </Box>
                </Flex>

                </Box>


                <Text mx="auto" my="3rem" fontSize={["1.9rem","2rem","2.5rem"]} fontWeight="bold" color="white">Nossos Serviços</Text>

                <Box>
                    <Flex direction={["column","column","row","row"]} pl={["4","6","8","10"]} pr={["4","6","8","10"]} mx="auto" justify={"center"} mb="4" >

                            
                        <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["250px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4"   _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                        }}>
                        <Flex direction="column">
                        <Icon as={FaSolarPanel} fontSize="3rem" mx="auto" my="auto" color="orange.600"

                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1.3rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
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

                        <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["250px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4"  mt="40px" _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                        }}>
                        <Flex direction="column">
                        <Icon as={FaTools} fontSize="3rem" mx="auto" my="auto" color="orange.600"

                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1.3rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                            textAlign="center"
                            mt="5"
                            >Instalação de placa solar</Text>
                            <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                            >
                            Instalações certificadas e padronizadas.
                            </Text>
                        </Box>
                        </Flex>
                        </Box>
                        <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["250px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4"  mt="40px" _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                        }}>
                        <Flex direction="column">
                        <Icon as={FaTools} fontSize="3rem" mx="auto" my="auto" color="orange.600"

                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1.3rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                            textAlign="center"
                            mt="5"
                            >Limpeza e Manutenção predial</Text>
                            <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                            >
                            Instalações certificadas e padronizadas.
                            </Text>
                        </Box>
                    </Flex>
                </Box>


                </Flex>
                </Box>
            </Flex>     
    
        );
    } else {
        return (
            <Flex direction="column" pl={["4","6","8","10"]} pr={["4","6","8","10"]} mx="auto"  bgGradient="linear(to-b, orange.300, orange.700)">

                <Box mx="auto">

                    <Text my="2rem" fontSize="2.5rem" fontWeight="bold" textAlign="center" color="white">Quem somos?</Text>

                        <Text textAlign="justify" color="white" maxW="900px" mx="auto" fontSize={["1.2rem"]} fontWeight="bold" >
                            A REL Solutions  representa a inovação em limpeza, operação, manutenção e instalação de painéis fotovoltaicos. Nosso principal objetivo é promover soluções tecnológicas, através da limpeza automatizada dos painéis, e demais serviços, atendendo de forma rápida, prática, segura e eficaz.
                            Desenvolvemos uma forma independente de limpeza de placas solares que atendem grande parte das usinas fotovoltaicas, com agilidade, eficiência , e principalmente, com baixos custos.
                            Temos como principal objetivo oferecer soluções com alta tecnologia na área de usinas solares.
                        </Text>
                    
                </Box>

                <Text mx="auto" my="2rem" fontSize="2.5rem" fontWeight="bold" color="white">Missão, Visão e Valores</Text>

                <Box>
                    <Flex justify="center">
                    <Box width={["230px", "250px", "280px", "310px", "350px"]} height="400" mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" m="4" mt="40px" _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                        bgGradient: "linear(to-b, white, orange.100)"
                    }}
                    >
                        <Flex direction="column">
                        <Icon as={FiTarget} fontSize="3rem" mx="auto" my="auto" color="orange.600"
                        
                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                            textAlign="center"
                            mt="5"
                            >Nossa Missão</Text>
                            <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                            >
                            Nossa missão é desenvolver, buscar e aperfeiçoar metodologias tecnológicas, oferecendo maior agilidade e eficiência em nossos serviços, proporcionando  uma experiência única, sustentável e segura.
                            </Text>
                        </Box>
                        </Flex>
                    </Box>

                    <Box width={["230px", "250px", "280px", "310px", "350px"]} height="400" mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" m="4" mt="40px" _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                    }}>
                        <Flex direction="column">
                        <Icon as={GoTelescope} fontSize="3rem" mx="auto" my="auto" color="orange.600"
                        
                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                            textAlign="center"
                            mt="5"
                            >Nossa Visão</Text>
                            <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                            >
                            Oferecer  soluções tecnológicas agregadas aos nossos serviços.
                            </Text>
                        </Box>
                        </Flex>
                    </Box>
                    <Box width={["230px", "250px", "280px", "310px", "350px"]} height="400" mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" m="4" mt="40px" _hover={{
                        transition: "0.6s",
                        transform: "translateY(-0.5rem)",
                        bg: "orange.200",
                    }}>
                        <Flex direction="column">
                        <Icon as={GiCutDiamond} fontSize="3rem" mx="auto" my="auto" color="orange.600"
                        
                        />
                        <Box my="auto">
                            <Text as="h2" fontSize={["1rem","1.2rem","1.3rem","1.4rem","1.5rem"]} fontWeight={"bold"} textTransform="initial" 
                            textAlign="center"
                            mt="5"
                            >Nossos Valores</Text>
                            <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                            >
                                Respeito ao cliente. <br /> 
                                Zelo pelas pessoas que contribuem para o crescimento e desenvolvimento da REL Solutions;
                                 <br />
                                Busca de soluções tecnológicas  de forma a aprimorar  processos;
                                 <br />
                                Atendemos bem para atendermos sempre.
                            {/* <UnorderedList textAlign={["justify"]} p="8" color="gray.500" fontSize="1.1rem">
                            <ListItem>Respeito ao cliente;</ListItem>
                            <ListItem>Zelo pelas pessoas que contribuem para o crescimento e desenvolvimento da REL Solutions;</ListItem>
                            <ListItem>Busca de soluções tecnológicas  de forma a aprimorar  processos;</ListItem>
                            <ListItem>Atendemos bem para atendermos sempre.</ListItem>
                        </UnorderedList> */}
                            </Text>
                        </Box>
                        </Flex>
                    </Box>
                    </Flex>
                    
                </Box>
                
                    
            <Text mx="auto" my="2rem" fontSize="2.5rem" fontWeight="bold" color="white">Nossos Serviços</Text>

            <Box>
            <Flex direction={["column","column","row","row"]} pl={["4","6","8","10"]} pr={["4","6","8","10"]} mx="auto" justify={"center"} >

                            
                <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["250px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" m="4" mt="40px" _hover={{
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

                <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["250px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" m="4" mt="40px" _hover={{
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
                        Instalações certificadas e padronizadas.
                        </Text>
                    </Box>
                    </Flex>
                </Box>
                <Box width={["230px", "250px", "280px", "310px", "350px"]} height={["250px"]} mx="auto" textAlign={"center"} bg="white" boxShadow={["lg"]} borderRadius="10px" p="4" m="4" mt="40px" _hover={{
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
                        >Limpeza e Manutenção predial</Text>
                        <Text as="p" p="4"  color="gray.500" fontSize={["1.1rem"]}
                        >
                        Instalações certificadas e padronizadas.
                        </Text>
                    </Box>
                    </Flex>
                </Box>

                
            </Flex>
            </Box>
            </Flex>
        );
    }}

    
}