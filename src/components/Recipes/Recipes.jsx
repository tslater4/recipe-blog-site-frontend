import { Link } from 'react-router';

const Recipes = ({ recipes, users }) => {
  return (
    <main>
      <h1>Recipes</h1>
      <ul>
        {/* {nothing below this is able to render unless you log in} */}
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            {(() => {
              const author = users.find((user) => user._id === recipe.originalPoster)?.username || 'Deleted User';
              console.log('Author:', author);
              return (
                <div className="recipe-card">
                  <div>
                    <h2>{recipe.title}</h2>
                    <h3>{recipe.description}</h3>
                    <p>{recipe.body}</p>
                    <p>Posted by: {author}</p>
                    <Link to={`/recipes/${recipe._id}`}>View Recipe</Link>
                  </div>
                </div>
              );
            })()}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Recipes;