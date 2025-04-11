import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';
import { Link, useParams } from 'react-router';
import * as recipeService from '../../services/recipeService';

const OneUser = () => {
    const { userID } = useParams();
    const [fetchedUser, setFetchedUser] = useState({});
    const { user } = useContext(UserContext);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await userService.getUserById(userID);
            setFetchedUser(data);
        };
        fetchUser();
    }, [userID]);

    // Maps over the users recipe ID's and grabs the full objects from mongo
    useEffect(() => {
        const fetchRecipes = async () => {
            if (fetchedUser.recipes?.length) {
                const updatedRecipes = await Promise.all(
                    fetchedUser.recipes.map(async (recipeId) => {
                        const recipe = await recipeService.getRecipeById(recipeId._id || recipeId); // dumb stupid moron react that i hate
                        return recipe;
                    })
                );
                setRecipes(updatedRecipes);
            }
        };
        fetchRecipes();
    }, [fetchedUser.recipes?.length]);
    
        return (
            <main>
                <h1>{fetchedUser.username}'s page</h1>
                <p>Recipes: {fetchedUser.recipes?.length || 0}</p>
                <div>
                    {recipes.map((recipe, index) => (
                        <div key={recipe._id || `recipe-${index}`}>
                            <h2>{recipe.title}</h2>
                            <Link to={`/recipes/${recipe._id}`}>View Recipe</Link>
                        </div>
                    ))}
                </div>
            </main>
        );
    };
export default OneUser;