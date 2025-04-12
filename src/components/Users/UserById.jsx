import { Link, useParams } from 'react-router';

const OneUser = ({ users, recipes }) => {
    const { userID } = useParams();
    const specificUser = users.find(user => user._id === userID);
    const specificUserRecipes = recipes.filter(recipe => recipe.originalPoster === userID);

    if (!specificUser) {
        return <p>User not found</p>;
    }

    return (
        <main>
            <h1>{specificUser.username}'s page</h1>
            <p>Recipes: {specificUserRecipes.length}</p>
            <div>
                {specificUserRecipes.map((recipe) => (
                    <div key={recipe._id}>
                        <h2>{recipe.title}</h2>
                        <h3>{recipe.description}</h3>
                        <p>{recipe.body}</p>
                        <Link to={`/recipes/${recipe._id}`}>View Recipe</Link>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default OneUser;
