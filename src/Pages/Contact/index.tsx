import React from "react";

import './Contact.scss'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <section className="contact wrapper">
            <div className="content">
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
                </div>
            </div>
        </section>
    )
}

export default Contact;