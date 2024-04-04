import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import '../style/AboutPage.css';
import blob3 from '../img/Ellipse 1.png'
import icona from '../img/icona.png'

const AboutPage = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About Page - VeggieVerse</title>
            </Helmet>
            <Navbar />
            <div id='content'>
                <h4>About Us</h4>
                <p>Welcome to VeggieVerse, your go-to destination for delicious and wholesome vegetarian recipes. At VeggieVerse, we believe that embracing a vegetarian lifestyle is not just about choosing a healthier option but also about savoring the incredible flavors and diversity that plant-based ingredients have to offer. Our curated collection of recipes is powered by the Spoonacular API, ensuring you have access to a wide variety of culinary delights that cater to all tastes and preferences.</p>
                <h5>Discover, Create, Enjoy</h5>
                <p>Explore our curated collection of recipes, ranging from quick and easy weekday meals to impressive dishes for special occasions. Whether you're a vegetarian veteran or just starting to explore meat-free options, VeggieVerse is here to guide you on a flavorful and fulfilling culinary experience.
                    Thank you for being a part of our vegetarian family. Let's cook, eat, and celebrate the goodness of nature together!
                    With love and veggies 🌱</p >
                <div id="blobContainer">
                    <img id="icona" src={icona} alt="icona" />
                    <img id="blob3" src={blob3} alt="blob3" />
                </div>
            </div>
        </div >
    );
};

export default AboutPage;