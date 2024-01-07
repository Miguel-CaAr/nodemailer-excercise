import nodemailer from "nodemailer";
import { envs } from "../plugins/envs.plugin";

interface SendEmailOptions {
  to: string;
  subject: string;
  htmlBody: string;
  //todo: attachements:
}

//todo: Attachments

export class EmailService {
  private trasporter = nodemailer.createTransport({
    service: envs.MAILER_EMAIL,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    const { to, subject, htmlBody } = options;

    try {
      const sendInformation = await this.trasporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
      });

      console.log(sendInformation);

      return true;
    } catch (error) {
      return false;
    }
  }
}
