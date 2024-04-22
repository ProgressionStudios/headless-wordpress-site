"use client";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Alert from './Alert';

import styles from "../../styles/content/contact.module.css";


//https://medium.com/@francescopassanante/how-to-send-a-form-with-contact-form-7-api-in-wp-headless-and-next-js-ad8936f65b9f
export default function ContactForm() {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
    const [message, setMessage] = useState('')
    const [dangerMessage, setDangerMessage] = useState('')
    const [isSending, setIsSending] = useState(false)

    const onSubmit = (data) => {
        setIsSending(true)
        setMessage('')
        setDangerMessage('')

        let form_data = new FormData()
        for (let key in data) {
            form_data.append(key, data[key])
        }

        // Assuming data.form_id exists and you want to append it.
        // If form_id is a static value or obtained differently, adjust accordingly.
        form_data.append("_wpcf7_unit_tag", data.form_id);

        fetch(`${process.env.NEXT_PUBLIC_CONTACT_URL}`, {
            method: 'POST',
            body: form_data
        })
            .then(response => response.json())
            .then(response => {
                if (response.status == 'mail_sent') {
                    setMessage(response.message)
                    resetField('yourname')
                    resetField('youremail')
                    resetField('yoursubject') 
                    resetField('yourmessage')
                } else {
                    setDangerMessage('Something was wrong.')
                }
                setIsSending(false)
            })
            .catch((error) => {
                setIsSending(false)
                setDangerMessage('Error: ' + error)
            });
    }
    return (
        <>
            <div className={styles.contactHeading}>
                <h3>Let&apos;s get in touch</h3>
                <h4>Fill out the form below to get in touch. We respond to all inquires within 24 hours.</h4>
            </div>
            <div className={styles.success}>
                {dangerMessage && <Alert type="danger" heading="Error" message={dangerMessage} />}
                {message && <Alert type="success" heading="Success" message={message} />}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Your Name"
                    {...register("yourname", { required: true, maxLength: 80 })}
                />
                {errors.yourname && <p className="text-danger"><small>Your name is required</small></p>}

                <input
                    className="form-control"
                    type="email"
                    placeholder="E-mail"
                    {...register("youremail",
                        {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                />
                {errors.youremail && <p className="text-danger"><small>Please enter a valid e-mail address</small></p>}

                <input
                    className="form-control"
                    type="text"
                    placeholder="Subject"
                    {...register("yoursubject", { required: true, maxLength: 80 })}
                />
                {errors.yoursubject && <p className="text-danger"><small>A subject is required</small></p>}

                <textarea
                    className="form-control"
                    rows="7"
                    placeholder="Message"
                    {...register("yourmessage", {
                        required: false
                    })}
                ></textarea>
                <button type='submit' className="button" disabled={isSending}>{isSending && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>} Submit Message</button>
            </form>
        </>
    )
}
