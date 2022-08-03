import { Box, Flex, FormControl, FormLabel, Stack, Text, Input, FormHelperText, Button, Textarea } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";

import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast} from "react-toastify";
import { sendContactMail } from "../services/sendMail";
import { useState } from "react";



export default function Contact () {
    // const form = useRef();
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
            // await sendContactMail(name, email, message, number);
            // setName('');
            // setEmail('');
            // setMessage('');
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
    return (

        
        <Flex bg="gray.300" >

            <Stack spacing="8" mx="auto" mb="40px" >
                <BoxContent width="900px" height="680px">
                    <Box p="4" as="form" onSubmit={handleSubmitEmail} >
                        <Text as="h2" fontSize="1.4rem" fontWeight={"500"}>Solicite um orçamento</Text>
                        <FormControl w={["300px","420px","500px","800px"]} mx="auto" mt="4">
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
            <ToastContainer />
        </Flex>
    );
}