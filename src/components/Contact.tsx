import { Box, Button, FormControl, FormLabel, Input, Spinner, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { sendContactMail } from "../services/sendMail";
import { BoxContent } from "./BoxContent";

export const Contact = () => {

     
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(isLoading);
        try {
            if (name === '' || email === '' || number === '' || message === '') {
              toast.error('Solicitação não enviada, por favor preencha todos os campos.');
              setIsLoading(false);
              return;
            }
            await sendContactMail(name, email, message, number);
            setIsLoading(false);
            setName('');
            setEmail('');
            setMessage('');
            toast.success('Solicitação enviada com sucesso');
            console.log(isLoading);
            
        } catch (error) {
            toast.error('Ocorreu um erro ao tentar enviar sua solicitação');
        }

    };
    return (
        <Stack spacing="8" mx="auto" my="40px" >
                <Box p="4" as="form" onSubmit={handleSubmitEmail} >
                    <Text as="h2" fontSize="1.5rem" fontWeight={"bold"}
                    mb="3"
                    >Solicite um orçamento</Text>
                    <FormControl maxW={["280px","300px", "310px", "400px"]} mx="auto" mt="4">
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
                                    <FormLabel htmlFor='message'>Mensagem</FormLabel>
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
                                    >{isLoading ? (
                                        <Spinner 
                                        thickness='5px'
                                        speed='1.2s'
                                        emptyColor='white'
                                        color='orange.600'
                                        size='lg'
                                        />
                                        ) : 
                                        <Text>Solicitar orçamento</Text> 
                                    }
                                    </Button>
                                    
                                </Box>
                                

                            </Stack>
                    </FormControl>
                </Box>
                {/* <BoxContent width="600px" height="580px">
                </BoxContent> */}
                <ToastContainer />
        </Stack>
    );
}