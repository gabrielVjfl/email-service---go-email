const port = 7677

const express = require('express')

const app = express()

let cors = require('cors')

app.use(cors())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

const nodemailer = require('nodemailer')

app.post('/send', async(req,res) => {

    try {

const {
    to, 
    subject, 
    text,
    user,
    pass
} = req.body

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:  587,
        auth: {
            user: `${user}`,
            pass: `${pass}`
        },
        tls: {
            rejectUnauthorized: false
        }
      
      })

      const mailSent = {
        text: `${text}`,
        subject: `${subject}`,
        from: "Gabriel voese <gabvoes.12@gmail.com",
        to: `${to}`,
        html: `
        <html>
        <body>
        <h1>${text}</h1>
        </body>
        </html>
        `
    }
    const info = await transporter.sendMail(mailSent)
      
console.log(info)

res.status(200).json({sucBackend: 'Email Enviado!'})
    }
    catch(err) {
        console.log(err)
        res.status(400).json({errBackend: 'Erro ao enviar o email! Verifique os dados e a senha!'})
    }
})

app.listen(port, () => {
    console.log('Listening on port', port)
})