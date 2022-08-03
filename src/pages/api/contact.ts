import nodemailer from 'nodemailer';

const email = process.env.MAILADRESS;
const emailPass = process.env.MAILPASS;



const mailer = ({ senderMail, name, text, number }) => {
  const transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
    port: 465,
    auth: {
        type: "login",
        user: email,
        pass: emailPass,
    },
    
    // secure: true,
  })
    const from = `${email}`;
    const mailList = ['luciene.santos@relsolutions.com.br', 'lenigerson.reis@relsolutions.com.br', email];
    const message = {
      from,
      to: mailList,
      subject: `Nova mensagem de contato - ${name} <${senderMail}>}`,
      // text: `Mensagem de <strong>${senderMail}</strong>, número ${number}, ${text}`,
      html: `
      <h3>Solicitação de orçamento pelo site</h3> 
      <br />
      <ul>
        <li>Cliente: <strong>${name}</strong></li>
        <li>Telefone para contato: <strong>${number}</strong></li>
      </ul> 
      <br />
        <p> A mensagem enviada foi: <br /> 
        <ul> 
          <li>${text}</li>
        </ul> 
        <br />
        <h3>RelSolutions</h3>
      `,
      replyTo: senderMail,
    };
  
    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) =>
        error ? reject(error) : resolve(info)
      );
    });
  };
  
  export default async (req: any, res: any) => {
    const { senderMail, name, content, number } = req.body;
  
  
    const mailerRes = await mailer({ senderMail, name, text: content, number });
    res.send(mailerRes);
  };