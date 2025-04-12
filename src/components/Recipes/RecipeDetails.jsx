import { useParams, Link } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import * as recipeService from '../../services/recipeService';
import CommentForm from '../CommentForm/CommentForm';

const Recipe = ({ recipes, users, handleDeleteRecipe, setRecipes, comments, setComments }) => {
    const { recipeID } = useParams();
    const { user, setUser } = useContext(UserContext);
    const recipe = recipes.find((recipe) => recipe._id === recipeID);
    const author = recipe ? users.find((user) => user._id === recipe.originalPoster)?.username || 'Deleted User' : 'Unknown';
    const handleAddComment = async (commentData) => {
        try {
            const newComment = await recipeService.createComment(recipeID, commentData);

            // Update the specific recipe in the recipes array
            setRecipes((prevRecipes) =>
                prevRecipes.map((r) =>
                    r._id === recipeID
                        ? { ...r, comments: [...r.comments, newComment._id] } // Add the new comment ID
                        : r
                )
            );

            // Add the new comment to the comments array
            setComments((prevComments) => [...prevComments, newComment]);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return recipe ? (
        <div>
            <div class="recipe-card">
                <h1>Recipe: {recipe.title}</h1>
                <h2>Description: {recipe.description}</h2>
                <p>Body: {recipe.body}</p>
                <p>Posted by: {author}</p>
            </div>
            {user._id === recipe.originalPoster ? (
          
                    <div className="recipe-actions">
                        <Link to={`/recipes/${recipeID}/edit`} className="edit-link">Edit Recipe</Link>
                        <button className="delete-button" onClick={() => handleDeleteRecipe(recipeID)}>DELETE RECIPE</button>
                    </div>
          
            ) : null}
            <CommentForm handleAddComment={handleAddComment}/>
            <h3>Comments</h3>
                    <ul className="comment-list">
                        {recipe.comments.map((commentID) => {
                            const comment = comments.find((comment) => comment._id === commentID);
                            if (!comment || !comment.text || comment.text.trim().length === 0) return null; 
                            if (!comment.commentAuthor) return null;
                            return (
                                <li key={comment._id}>
                                    <div className="comment-card">
                                        <p>"{comment.text}"</p>
                                        <p class="authorName">-{users.find((user) => user._id === comment.commentAuthor)?.username || 'Unknown'}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

      
        </div>
    ) : (
        <div>
            <h1>Recipe not found</h1>
        </div>
    );
};

export default Recipe;