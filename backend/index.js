const nodemailer = require('nodemailer')

const SMT_CONFIG = require('./config/smtp')

const transporter = nodemailer.createTransport({
  host: SMT_CONFIG.host,
  port: SMT_CONFIG.port,
  auth: {
      user: SMT_CONFIG.user,
      pass: SMT_CONFIG.pass
  },
  tls: {
      rejectUnauthorized: false
  }

})


async function run() {
 const mailSent = await transporter.sendMail({
     text: 'Text do email',
     subject: 'Assunto do node',
     from: 'Gabriel voese <gabvoes.12@gmail.com',
     to: ['gabvoes.1000@gmail.com','gabvoes.12@gmail.com'],
     html: `
     <html>
     <body>
     <strong>Floripaa</strong>
     </body>
     </html>
     `

 })
 console.log(mailSent)
}
    run()
