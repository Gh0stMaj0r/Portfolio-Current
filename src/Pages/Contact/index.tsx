import React from "react";

import './Contact.scss'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
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
                        <form>
                            <div className="form-flex-row">
                                <input type="text" placeholder="Firstname"></input>
                                <input type="text" placeholder="Lastname"></input>
                            </div>
                            <input type="text" placeholder="Email"></input>
                            <textarea placeholder="Message"></textarea>
                            <div className="form-button">
                                <button className="button"><IoIosSend/> Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;