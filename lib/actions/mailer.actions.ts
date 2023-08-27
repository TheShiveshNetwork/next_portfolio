import emailjs from '@emailjs/browser';
import { FC } from 'react';

interface FormData {
    fullname: string;
    email: string;
    subject: string;
    message: string;
}

export const sendEmail = ( form : HTMLFormElement, setMessage: FC, setSending: FC ) => {
    setSending(true);
    // @ts-ignore
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
        .then((result) => {
            setSending(false);
            setMessage({
                text: 'Thank you for reaching out! 🎉 Your message has been successfully submitted. I appreciate your interest and will get back to you shortly. If the provided email is correct, you can expect a response soon. Have a fantastic day!',
                success: true,
            })
        }, (error) => {
            setMessage('Oops! 😅 It looks like there was an issue with submitting your message. Please double-check your information and try again. If the problem persists, feel free to reach out to me through alternative means. Apologies for any inconvenience, and I look forward to connecting with you soon!')
        });
};