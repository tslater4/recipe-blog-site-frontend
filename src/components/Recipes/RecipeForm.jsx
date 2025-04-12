import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as recipeService from '../../services/recipeService';

const RecipeForm = (props) => {
    const { recipeID } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        body: '',
    });

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (recipeID) {
            props.handleUpdateRecipe(recipeID, formData);
        }
        else  {
            props.handleAddRecipe(formData);
        }
    };

    useEffect(() => {
        const fetchRecipe = async () => {
          const recipeData = await recipeService.show(recipeID);
          setFormData(recipeData);
        };
        if (recipeID) fetchRecipe();

        return () => {
            setFormData({
                title: '',
                description: '',
                body: '',
            });
        }
      }, [recipeID]);   
    return (
        <main>
            <h1>{recipeID ? "Edit Recipe" : "New Recipe"}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title-input'>Title</label>
                <input
                    required
                    type='text'
                    name='title'
                    id='title-input'
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor='description-input'>Description</label>
                <input
                    required
                    type='text'
                    name='description'
                    id='description-input'
                    value={formData.description}
                    onChange={handleChange}
                />
                <label htmlFor='body-input'>Body</label>
                <textarea
                    required
                    name='body'
                    id='body-input'
                    value={formData.body}
                    onChange={handleChange}
                />
                <button type='submit'>SUBMIT</button>
            </form>
        </main>
    );
};

export default RecipeForm;
