import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import '../RecipePage/RecipePage.css';
import blob2 from '../../img/Ellipse 1.png'
import Navbar from '../../components/Navbar/Navbar';


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
            <Helmet>
                <title>Recipe Page - VeggieVerse</title>
            </Helmet>
            <Navbar />
            <div id="blob2Container">
                <img id="blob2" src={blob2} alt="blob2" />
                <img className="image-recipe"
                    src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`} alt={recipe.title} />
            </div>
            <div id="content">
                <h3 className="recipe-title-page">{recipe.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </div>
        </div>
    );
}

export default RecipePage;


