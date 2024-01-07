import { EmailService } from "./email/email.service";
import { envs } from "./plugins/envs.plugin";

console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY, envs.PORT);

class Main {
  public static start() {
    console.log("Server started...");

    //Send email
    const emailService = new EmailService();

    emailService.sendEmail({
        to: "ortsacrotceh@gmail.com",
        subject: 'Example email from nodemailer-excercise',
        htmlBody: `
        <h1><b>Aristóteles</b></h1>
        <hr>
        <h3>Biografía</h3>
        <p>Aristóteles ​​​ fue un filósofo, polímata y científico griego nacido en la ciudad de Estagira, al norte de la Antigua Grecia. Es considerado junto a Platón, el padre de la filosofía occidental. Sus ideas han ejercido una enorme influencia sobre la historia intelectual de Occidente por más de dos milenios.​​​ <p>
        `
    })
  }
}

Main.start();