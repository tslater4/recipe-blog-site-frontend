const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

// fetches all users
const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }
    return data
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

// gets a specified user by their ID
const getUserById = async (userID) => {
  console.log("userID", userID);
  try {
    const res = await fetch(`${BASE_URL}/${userID}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    if (!res.ok) {
      console.error(`Error: ${res.status} - ${res.statusText}`);
      if (res.status === 404) {
        throw new Error('User not found');
      } else if (res.status === 401) {
        throw new Error('Unauthorized access');
      } else {
        throw new Error('Failed to fetch user by id');
      }
    }
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}


export {
  index,
  getUserById,
};