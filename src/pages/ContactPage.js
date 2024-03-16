import React from 'react';
import Navbar from '../components/Navbar';
import '../style/ContactPage.css';

const ContactPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Codice per gestire l'invio del modulo
        // Puoi aggiungere qui la logica per inviare i dati del modulo a un backend o a un servizio di posta elettronica
    };

    return (
        <div className="contact-page">
            <Navbar />
            <div id='form'>
                <h1>Contact us</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;