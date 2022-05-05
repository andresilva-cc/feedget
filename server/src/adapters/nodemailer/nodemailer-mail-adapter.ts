import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5414253ad32281",
    pass: "8f23e5ef84d3cd"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) { 
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'André Silva <andreluiz.97@outlook.com>',
      subject,
      html: body,
    });
  }
}
