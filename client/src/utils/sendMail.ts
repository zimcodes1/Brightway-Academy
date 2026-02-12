import emailjs from '@emailjs/browser';
import type { FormEvent } from 'react';
const publicKey = import.meta.env.PUBLIC_KEY;
const serviceKey = import.meta.env.SERVICE_KEY;
const templateId = import.meta.env.TEMPLATE_ID;


const sendEmail = ({e,form}:{e: FormEvent<HTMLFormElement>, form: React.RefObject<HTMLFormElement | null>}) => {
    e.preventDefault();
    console.log("Submitted")
    // Safety check for TypeScript: ensure form.current is not null
    if (!form.current) return;

    emailjs.sendForm(
      serviceKey,
      templateId,
      form.current,
      publicKey
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
        alert("Message sent!");
    })
    .catch((error) => {
        console.log('FAILED...', error.text);
    });
  };



export default sendEmail