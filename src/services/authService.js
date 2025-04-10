const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;


const signUp = async (formData) => {
    try {
      const res = await fetch(`${BASE_URL}/sign-up`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
    const data = await res.json();
    if (data.err) {
    throw new Error(data.err);
    }
    if (data.token) {
        console.log(data); // debug
        localStorage.setItem('token', data.token);
        let user = JSON.parse(atob(data.token.split('.')[1])); // genuinely no idea why but .payload didnt exist and the info needed was just in the parent, okay sure
        console.log(user) // debug
        return user;
    } else {
      console.log("token mismatch"); // debug
    }
    throw new Error('Invalid response from server');
    } catch (err) {
    console.log(err);
    throw new Error(err);
    }
};
  
const signIn = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

  const data = await res.json();
  console.log(data); // debug
  if (data.err) {
  throw new Error(data.err);
  }
  if (data.token) {
      localStorage.setItem('token', data.token);
      let user = JSON.parse(atob(data.token.split('.')[1]));
      return user;
  }
  throw new Error('Invalid response from server');
  } catch (err) {
  console.log(err);
  throw new Error(err);
  }
};


export {
signUp,
signIn,
};