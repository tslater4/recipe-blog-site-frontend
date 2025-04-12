import { useParams, Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import * as recipeService from '../../services/recipeService';
import CommentForm from '../CommentForm/CommentForm';

const Recipe = ({ recipes, users, handleDeleteRecipe, setRecipes, comments }) => {

    const { recipeID } = useParams();
    const { user, setUser } = useContext(UserContext);
    
    const recipe = recipes.find((recipe) => recipe._id === recipeID);
    const author = recipe ? users.find((user) => user._id === recipe.originalPoster)?.username || 'Deleted User' : 'Unknown';

    console.log("comments ", comments);
    console.log("rec comments ", recipe.comments);

    return recipe ? (
        <div>
            <h1>Recipe: {recipe.title}</h1>
            <h2>Description: {recipe.description}</h2>
            <p>Body: {recipe.body}</p>
            <p>Posted by: {author}</p>
            {user._id === recipe.originalPoster ? (
                <div>
                    <Link to ={`/recipes/${recipeID}/edit`}> Edit Recipe</Link>
                    <button onClick={() => handleDeleteRecipe(recipeID)} >Delete Recipe</button>
                </div>
            ) : (
                null
            )}
            <h2>Comments:</h2>
            <CommentForm/>
      
        </div>
    ) : (
        <div>
            <h1>Recipe not found</h1>
        </div>
    );
};

export default Recipe;