const nodemailer = require("nodemailer");

// with the help of this function we send mail of otp; 
// we send mail with the help of transporter and here MAIL_USER , MAIL_PASS contain app password of that email which send email 
const mailSender = async (email, title, body) => {                                 
    try{
            let transporter = nodemailer.createTransport({                    
                host:process.env.MAIL_HOST,                               
                auth:{
                    user: process.env.MAIL_USER,                           
                    pass: process.env.MAIL_PASS,
                }
            })

            let info = await transporter.sendMail({
                from: 'StudyMotion - by Parth Baldaniya',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            return info;
    }
    catch(error) {
        throw error;
    }
}


module.exports = mailSender;