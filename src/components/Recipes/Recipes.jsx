import { Link } from 'react-router';

const Recipes = ({ recipes, users }) => {
  return (
    <main>
      <h1>Recipes</h1>
      <ul>
        <div className ="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div className="recipe-card">
              {(() => {
                const author = users.find((user) => user._id === recipe.originalPoster)?.username || 'Deleted User';
                return (
                  <div>
                    <h2>{recipe.title}</h2>
                    <h3>{recipe.description}</h3>
                    <p>{recipe.body}</p>
                    <p>Posted by: {author}</p>
                    <Link to={`/recipes/${recipe._id}`}>View Recipe</Link>
                  </div>
                );
              })()}
            </div>
          </li>
        ))}
        </div>
      </ul>
    </main>
  );
};

export default Recipes;