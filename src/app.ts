import { EmailService } from "./email/email.service";
import { envs } from "./plugins/envs.plugin";

console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY, envs.PORT);

class Main {
  public static start() {
    console.log("Server started...");

    //Send email
    const emailService = new EmailService();

    emailService.sendEmailWithFileSystem([
      "ortsacrotceh@gmail.com",
      "castroarredondo.hector@gmail.com",
    ]);
  }
}

Main.start();
