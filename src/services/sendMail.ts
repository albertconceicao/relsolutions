import axios from 'axios';

export const sendContactMail = async (
  name: string,
  senderMail: string,
  content: string, 
  number: string
) => {
  const data = {
    name,
    senderMail,
    content,
    number
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (error) {
    return error;
  }
};