import emailjs from '@emailjs/browser';

interface FormData {
    fullname: string;
    email: string;
    subject: string;
    message: string;
}

export const sendEmail = ( form : HTMLFormElement ) => {
    // @ts-ignore
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            console.log('email sent')
        }, (error) => {
            console.log(error.text);
        });
};