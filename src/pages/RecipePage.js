// RecipePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/RecipePage.css';
import blob2 from '../img/Ellipse 1.png'
import Navbar from '../components/Navbar';


function RecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${id}/information?apiKey=b674a92572bc4924ae094fd889a4514c`
                );
                setRecipe(response.data);
            } catch (error) {
                console.error('Errore durante il recupero delle informazioni sulla ricetta:', error);
            }
        };

        fetchRecipe();
    }, [id]);

    return (
        <div className="recipes-page">
            <Navbar />
            <div id="blob2Container">
                <img id="blob2" src={blob2} alt="blob2" />
                <img className="image-recipe"
                    src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`} alt={recipe.title} />
            </div>
            <h3 className="recipe-title-page">{recipe.title}</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
}

export default RecipePage;


