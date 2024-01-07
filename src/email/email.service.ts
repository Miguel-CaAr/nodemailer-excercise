import nodemailer from "nodemailer";
import { envs } from "../plugins/envs.plugin";

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachements: Attachment[];
}

interface Attachment {
  filename: string;
  path: string;
}

export class EmailService {
  private trasporter = nodemailer.createTransport({
    service: envs.MAILER_EMAIL,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachements = [] } = options;

    try {
      const sendInformation = await this.trasporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachements,
      });

      console.log(sendInformation);

      return true;
    } catch (error) {
      return false;
    }
  }

  async sendEmailWithFileSystem(to: string | string[]) {
    const subject = "Example email from nodemailer-excercise with attachments";
    const htmlBody = `
    <h1><b>Nietzsche</b></h1>
        <hr>
        <h3>Biografía</h3>
        <p>Friedrich Wilhelm Nietzsche fue un filósofo, poeta, músico y filólogo alemán, cuya obra ha ejercido una profunda influencia en el pensamiento mundial contemporáneo y en la cultura occidental​​​ <p>
      `;
    const attachements: Attachment[] = [
      {
        filename: "nietzsche.png",
        path: "./img/nietzsche.png",
      },
    ];

    return this.sendEmail({
      to,
      subject,
      htmlBody,
      attachements,
    });
  }
}
