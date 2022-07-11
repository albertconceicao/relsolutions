import nodemailer from 'nodemailer';

const email = "contato@relsolutions.com.br";
const emailPass = "Contato2022.";

const transporter = nodemailer.createTransport({
    host: "smtp.https://relsolutions.vercel.app/.com.br",
    port: 587,
    auth: {
        type: "login",
        user: email,
        pass: emailPass,
    },
    // secure: true,
})

const mailer = ({ senderMail, name, text }) => {
    const from = `${senderMail}`;
    const message = {
      from,
      to: `${email}`,
      subject: `Nova mensagem de contato - ${name}`,
      text,
    };
  
    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) =>
        error ? reject(error) : resolve(info)
      );
    });
  };
  
  export default async (req: any, res: any) => {
    const { senderMail, name, content } = req.body;
  
    // if (senderMail === '' || name === '' || content === '') {
    //   res.status(403).send();
    //   return;
    // }
  
    const mailerRes = await mailer({ senderMail, name, text: content });
    res.send(mailerRes);
  };