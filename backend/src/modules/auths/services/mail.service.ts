import nodemailer, { TransportOptions } from 'nodemailer';

class MailSevice {
  transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    } as TransportOptions);
  }

  async sendActivationEmail(to: string, link: string, username: string): Promise<void> {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Активация аккаунта на ' + process.env.API_URL,
      text: '',
      html: `
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 1px; line-height: normal;" bgcolor="#F8F8F8">
		<tr em="group">
			<td align="center">
				<!--[if (gte mso 9)|(IE)]>
				<table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
				<![endif]-->
				<table cellpadding="0" cellspacing="0" width="100%" border="0" style="max-width: 660px; min-width: 660px; width: 660px;" class="em-narrow-table">
<tr em="block" class="em-structure">
                                    <td align="center" style="padding: 30px 40px;" class="em-mob-padding_left-20 em-mob-padding_right-20">
                                        <table align="center" border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                                            <tr>
                                                <td width="580" valign="top" class="em-mob-wrap em-mob-width-100perc">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td style="padding: 20px 0 10px;">
  <div style="font-family: -apple-system, 'Segoe UI', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; font-size: 24px; line-height: 32px; color: #333333;" align="center"><strong>Здравствуй, ${username}!</strong></div>
</td></tr></table>
                                                </td>
                                            </tr></table>
                                    </td>
                                </tr><tr em="block" class="em-structure">
                                    <td align="center" style="padding: 30px 40px;" class="em-mob-padding_left-20 em-mob-padding_right-20">
                                        <table align="center" border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                                            <tr>
                                                <td width="580" valign="top" class="em-mob-wrap em-mob-width-100perc">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td style="padding-bottom: 10px;">
  <div style="font-family: -apple-system, 'Segoe UI', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; font-size: 16px; line-height: 21px; color: #5a5a5a;">Чтобы продолжить регистрацию, пожалуйста, подтвердите свою учетную запись:</div>
</td></tr></table>
                                                </td>
                                            </tr></table>
                                    </td>
</tr><tr em="block" class="em-structure">
                                    <td align="center" style="padding: 30px 40px;" class="em-mob-padding_left-20 em-mob-padding_right-20">
                                        <table align="center" border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                                            <tr>
                                                <td width="580" valign="top" class="em-mob-wrap em-mob-width-100perc">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td style="padding: 10px 0px 12px;" align="center">
  <table cellpadding="0" cellspacing="0" border="0" width="200" class="em-mob-width-100perc">
    <tr>
      <td align="center" valign="middle" height="41" style="border-radius: 5px; height: 41px; background-color: #ffffff;" bgcolor="#FFFFFF">
        <a style="display: block; height: 41px; font-family: -apple-system, 'Segoe UI', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; font-size: 16px; line-height: 41px; text-decoration: none; white-space: nowrap; color: #000000;" href=${link} target="_blank">подтвердить</a>
      </td>
    </tr></table>
</td></tr></table>
                                                </td>
                                            </tr></table>
                                    </td>
</tr>
</table>
      `,
    });
  }
}

const mailService = new MailSevice();

export default mailService;
