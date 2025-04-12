//dependencies
import { Routes, Route, useNavigate } from 'react-router'; 
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './contexts/UserContext';
// pages
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/landing';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import RecipeForm from './components/Recipes/RecipeForm';
import Recipes from './components/Recipes/Recipes';
import AllUsers from './components/Users/AllUsers';
import OneUser from './components/Users/UserById';
import RecipeDetails from './components/Recipes/RecipeDetails';
//services
import * as userService from './services/userService';
import * as recipeService from './services/recipeService';
import * as commentService from './services/commentService';

const App = () => {
  const { user } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    recipeService.index().then(setRecipes);
    userService.index().then(setUsers);
    commentService.index().then(setComments);
  }, []);
  
  
  const navigate = useNavigate();

  const handleAddRecipe = async (recipeData) => {
    const newRecipe = await recipeService.create(recipeData);
    setRecipes([newRecipe, ...recipes]);
    navigate('/recipes');
  }

  const handleDeleteRecipe = async (recipeId) => {
    const deletedRecipe = await recipeService.destroy(recipeId);
    setRecipes(recipes.filter((recipe) => recipe._id !== deletedRecipe._id));
    navigate('/recipes');
  }
  const handleUpdateRecipe = async (recipeID, recipeFormData) => {
    const updatedRecipe = await recipeService.update(recipeID, recipeFormData);
    setRecipes(recipes.map((recipe) => (recipe._id === updatedRecipe._id ? updatedRecipe : recipe)));
    navigate(`/recipes/${recipeID}`);
  };


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing recipes={recipes} users={users} user={user}/>} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />

        {user ? (
          <>
            <Route path='/recipes' element={<Recipes recipes={recipes} users={users} />} />
            <Route path='/users' element={<AllUsers users={users}/>} />
            <Route path='/users/:userID' element={<OneUser recipes={recipes} users={users}/>} />
            <Route path='/recipes/:recipeID' element={<RecipeDetails comments={comments} setComments={setComments} recipes={recipes} setRecipes={setRecipes} users={users} handleDeleteRecipe={handleDeleteRecipe} />} /> 
            <Route path='/recipes/new' element={<RecipeForm handleAddRecipe={handleAddRecipe}/>} />
            <Route path='/recipes/:recipeID/edit' element={<RecipeForm handleUpdateRecipe={handleUpdateRecipe} />} />
          </>
        ) : (
          <Route path='*' element={<SignInForm />} />
        )}
      </Routes>
    </>
  );
};

export default App;

