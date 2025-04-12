const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/recipes`;

// fetches all recipes
const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await res.json();

        if (data.err) {
            throw new Error(data.err);
        }
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
const indexComments = async () => {
    try {
        const res = await fetch(`${BASE_URL}/comments`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await res.json();
        if (data.err) {
            throw new Error(data.err);
        }
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
// fetches a specified recipe by its ID
const getRecipeById = async (recipeID) => {
    console.log("Fetching recipe with ID:", recipeID);
    try {
        const res = await fetch(`${BASE_URL}/${recipeID}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} - ${res.statusText}`);
            if (res.status === 404) {
                throw new Error('Recipe not found');
            } else if (res.status === 401) {
                throw new Error('Unauthorized access');
            } else {
                throw new Error('Failed to fetch recipe by id');
            }
        }
        return await res.json();
    } catch (err) {
        throw new Error(err);
    }
};
const show = async (recipeID) => {
    try {
        const res = await fetch(`${BASE_URL}/${recipeID}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} - ${res.statusText}`);
            if (res.status === 404) {
                throw new Error('Recipe not found');
            } else if (res.status === 401) {
                throw new Error('Unauthorized access');
            } else {
                throw new Error('Failed to fetch recipe by id');
            }
        }
        return await res.json();
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

const create = async (RecipeData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(RecipeData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const destroy = async (recipeID) => {
    try {
        const res = await fetch(`${BASE_URL}/${recipeID}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} - ${res.statusText}`);
            const errorMessage = await res.text();
            console.error(`Failed to delete recipe: ${errorMessage}`);
            throw new Error(`Failed to delete recipe: ${res.status} - ${res.statusText}`);
        }
        return await res.json();
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
  };

const update = async (recipeID, recipeFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${recipeID}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipeFormData),
        });
        if (!res.ok) {
            console.error(`Error: ${res.status} - ${res.statusText}`);
            throw new Error('Failed to update recipe');
        }
        return await res.json();
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const createComment = async (hootId, commentFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${hootId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

export {
    index,
    getRecipeById,
    create,
    destroy,
    show,
    update,
    createComment,
  };