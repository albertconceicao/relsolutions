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
            await sendContactMail(name, email, message);
            setName('');
            setEmail('');
            setMessage('');
            toast('Email enviado com sucesso', {
                autoClose: 2000,
                style: {
                    background: '#f5b489',
                    color: 'black',
                },
                
            });
        } catch (error) {
            toast.error('Ocorreu um erro ao tentar enviar sua solicitação');
        }
        // emailjs.sendForm('service_yvfnnxn', 'template_sjnea8k', e.target, 'Rkzlq7jnBW2pR_bNG')
        //   .then((result) => {
        //       console.log(result.text);
              
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        //   e.target.reset();
    };
    return (

        
        <Flex direction="column"  mt="-150px" justify="center" >

            <Stack spacing="8" mx="auto" >
                <BoxContent width="600px" height="580px">
                    <Box p="4" as="form" onSubmit={handleSubmitEmail} >
                        <Text as="h2" fontSize="1.4rem" fontWeight={"500"}>Solicite um orçamento</Text>
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
                                    <FormLabel htmlFor='number'>Mensagem</FormLabel>
                                    <Textarea placeholder="Insira sua mensagem aqui" name="message" bg="gray.300" maxW={"340px"}
                                    value={message}
                                    onChange={({target}) => setMessage(target.value)}
                                    />                                     
                                </Box>
                                <Box>
                                    <Button w="70%" 
                                    bg="orange.700" color="white" _hover={{
                                        bg: "orange.600"
                                    }} type="submit"
                                    >Solicitar orçamento</Button>
                                </Box>

                            </Stack>
                        </FormControl>
                    </Box>
                    {/* <form action="https://public.herotofu.com/v1/f3817be0-f662-11ec-bc36-e1ea9ccadd33" method="post">
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input name="Name" id="name" type="text" required />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input name="Email" id="email" type="email" required  />
                        </div>
                        <div>
                            <input type="submit" value="Download CTA" />
                        </div>
                    </form> */}
                </BoxContent>
            </Stack>
            <ToastContainer />
        </Flex>
    );
}