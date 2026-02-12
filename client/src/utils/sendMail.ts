import emailjs from '@emailjs/browser';
import type { FormEvent } from 'react';
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

interface SendEmailParams {
  e: FormEvent<HTMLFormElement>;
  form: React.RefObject<HTMLFormElement | null>;
  onSuccess: () => void;
  onFailure: (error: string) => void;
}

const sendEmail = ({e, form, onSuccess, onFailure}: SendEmailParams) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      serviceKey,
      templateId,
      form.current,
      publicKey
    )
    .then(() => {
        onSuccess();
    })
    .catch((error) => {
        onFailure(error.text || 'An error occurred');
    });
  };



export default sendEmail