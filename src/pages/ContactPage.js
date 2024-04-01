import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import '../style/ContactPage.css';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_gp8yu54', 'template_giom19z', event.target, 'IOMVpKTZDDmCT4VF_')
            .then((result) => {
                alert('Message sent');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                alert('error');
            });


    };

    return (
        <div className="contact-page">
            <Navbar />
            <div id='form'>
                <h1>Contact us</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
