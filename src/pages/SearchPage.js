import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet'; 
import '../style/SearchPage.css';
import poke from '../img/poke.png'
import blob from '../img/Ellipse 1.png'
import spaghetti from '../img/spaghetti.png'
import salad from '../img/salad1.png'
import Navbar from '../components/Navbar';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const search = searchParams.get('search');
        console.log('search', search);
        if (search) {
            setIsLoading(true);
            setQuery(search);
            handleSearch(search);
        }
    }, [searchParams])

    const handleSearch = async (query) => {
        try {
            if (query.trim() === '') {
                setErrorMessage('error');
                document.getElementById('recipesList').scrollIntoView({ behavior: "smooth" });
                return;
            }
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/search?query=${query}&diet=vegetarian&apiKey=b674a92572bc4924ae094fd889a4514c`
            );
            if (response.data.results.length > 0) {
                setRecipes(response.data.results);
                setErrorMessage(null);
            } else {
                setRecipes([]);
                setErrorMessage('No results');
            }
            setTimeout(function() {
                document.getElementById('recipesList').scrollIntoView({ behavior: "smooth" });
            }, 200);
        } catch (error) {
            console.error('Errore durante la ricerca delle ricette:', error);
        }
        setIsLoading(false);
    };

    const onSearch = () => {
        setSearchParams({ 'search': query });
    }

    return (
        <div className="search-page">
            <Helmet>
                <title>Search Page - VeggieVerse</title>
            </Helmet>
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
            <button onClick={onSearch}>Search</button>

            <h1 display={errorMessage ? 'block' : 'hidden'}>{errorMessage}</h1>

            <div className='loader' display={isLoading ? 'block' : 'hidden'} />

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
