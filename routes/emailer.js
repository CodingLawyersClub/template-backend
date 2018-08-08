var config = require('../config')
const { mailgunApiKey, mailgunDomain } = config;
var mailgun = require('mailgun-js')({apiKey: mailgunApiKey, domain: mailgunDomain});
module.exports = {
    sendEmail: ({
        to,
        bcc,
        from = '***INSERT_EMAIL_HERE*** (ex. Coding Lawyers Club <donotreply@codinglawyers.club>)', 
        subject, 
        text,
        html
     }
    ) => {
        let data = {
            from,
            to,
            subject,
            text,
            html
        };

        if (bcc) {
            data.bcc = bcc;
        }
        
        return mailgun.messages().send(data);
    }
}
