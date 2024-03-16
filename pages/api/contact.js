import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';
import { Email } from '../../components/Contact';

function formValid(body) {
    return body.email && body.message && body.name && body.subject;
}

export default async function handler(req, res) {
    if (!formValid(req.body)) {
        res.status(422).end();
        return;
    }

    const { email, name, message, subject } = req.body;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const ipaddress = req.headers['x-real-ip'] || req.socket.remoteAddress;

    // console.log(`email=${email} name=${name} message=${message} subject=${subject} ipaddress=${ipaddress}`)
    const emailHtml = render(<Email email={email} name={name} message={message} subject={subject} ipaddress={ipaddress} />)
    // const emailHtml = "";

    const mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `Message from ${name} (${subject})`,
        html: emailHtml
    };

    const sendMailPromise = () =>
        new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return res.json({ message: 'Email sent' });
    } catch (err) {
        return res.json({ error: err }, { status: 500 });
    }
}