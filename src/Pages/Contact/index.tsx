import { useRef, useEffect, useState} from "react";
import emailjs from '@emailjs/browser'
import { FormEvent } from 'react';

import './Contact.scss'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      emailjs.init("Wri1mQvAtFAIlf2YB")
    }, []);
  
    const handleSubmit = async (e:FormEvent) => {
      e.preventDefault();
      sendEmail();
    }

    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const [ hasError, setHasError ] = useState(false);


    setTimeout(() => {
        setIsSubmitted(false);
        setHasError(false);
    }, 10000);

    const ValidateForm = () => {
        // jos nimi ei ole ok, return false;
        // jos email ei ole ok, return false;

        if (!firstnameRef.current?.value || firstnameRef.current?.value == '')
            return false;

        if (!lastnameRef.current?.value || lastnameRef.current?.value == '')
            return false;

        if (!emailRef.current?.value || emailRef.current?.value == '')
            return false;

        if (!subjectRef.current?.value || subjectRef.current?.value == '')
            return false;
        
        if (message == '')
            return false;

        return true;
    }
  
    const sendEmail = async () => {
      const serviceId = "service_ej2kefj"
      const templateId = "template_n7uofxf"

      if (!ValidateForm()) {
        setHasError(true);
        return;
      }
  
      try {
        setLoading(true);
        const emailValue = emailRef.current ? emailRef.current.value: '';
        await emailjs.send(serviceId, templateId, {
          firstname: firstnameRef.current?.value,
          lastname: lastnameRef.current?.value,
          recipient: emailValue,
          subject: subjectRef.current?.value,
          message: message
        });
        setIsSubmitted(true);
      } catch (error) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };
    return (
        <section className="contact wrapper" id="contact">
            <div className="content flex-row">
                <div className="contact">
                    <div className="contact-element1">
                        <div className="element1-row">
                            <h2>Contact</h2>
                            <hr></hr>
                        </div>
                        <div className="element1-icons-row">
                            <FiPhone/><p>040-0856880</p>
                        </div>
                        <div className="element1-icons-row">
                            <MdOutlineMail/><p>suhonen.arttu2002@gmail.com</p>
                        </div>
                        <div className="element1-icons-row">
                            <IoLocationOutline/><p>Jokelantie 616, Oulu Finland</p>
                        </div>
                        <div className="element1-row-end">
                            <hr></hr>
                        </div>
                    </div>
                    <div className="contactform">
                        <h2>Let's Talk!</h2>
                        <p>If you have project ideas or meaby job offer, <br></br>Send me a message it's easy thing to do!</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-flex-row">
                                <input ref={firstnameRef} type="text" placeholder="Firstname"></input>
                                <input ref={lastnameRef} type="text" placeholder="Lastname"></input>
                            </div>
                            <input ref={emailRef} type="text" placeholder="Email"></input>
                            <input ref={subjectRef} type="text" placeholder="Subject"></input>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message"></textarea>
                            <div className="form-button">
                                <div className="submit-error">
                                    {isSubmitted && (
                                        <span className="success"><IoIosCheckmarkCircle />Succesfully sent message! <br></br>I'll be in touch soon</span>
                                    )}

                                    {hasError && (
                                        <span className="error"><FaCircleXmark />Error sending message!<br></br> Check all fields</span>
                                    )}
                                </div>


                                <button className="button" disabled={loading}><IoIosSend/> Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;