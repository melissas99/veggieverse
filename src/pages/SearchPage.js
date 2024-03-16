// SearchPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/SearchPage.css';
import '../style/App.css';
import poke from '../img/poke.png'
import blob from '../img/Ellipse 1.png'
import spaghetti from '../img/spaghetti.png'
import salad from '../img/salad1.png'
import Navbar from '../components/Navbar';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/search?query=${query}&diet=vegetarian&apiKey=b674a92572bc4924ae094fd889a4514c`
            );
            setRecipes(response.data.results);

            // Scroll to the recipes list
            document.getElementById('recipesList').scrollIntoView({ behavior: "smooth" });
        } catch (error) {
            console.error('Errore durante la ricerca delle ricette:', error);
        }
    };
    return (
        <div className="search-page-container">
            <Navbar />
            <div id="blobContainer">
                <img id="blob" src={blob} alt="blob" />
                <img id="poke" src={poke} alt="img" />
                <img id="spaghetti" src={spaghetti} alt="img" />
                <img id="salad" src={salad} alt="img" />
            </div>

            <h1>Vegetarian</h1>
            <h2>Recipe Search</h2>
            <h3>
                Welcome to our culinary haven designed exclusively for vegetarians!
                <br />
                Dive into a realm of meat-free flavors with our curated recipes
                <br />
                Utilizing the Spoonacular API integration,
                <br />
                discover inspiration for your favorite dishes at the click of a button.
            </h3>

            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>

            <div id="recipesList" className="recipes-list">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <Link to={`/recipe/${recipe.id}`}>
                            <img
                                className="recipe-image"
                                src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                                alt={recipe.title}
                            />
                        </Link>
                        <h3 className="recipe-title">{recipe.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
