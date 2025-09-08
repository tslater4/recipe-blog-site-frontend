import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { signUp } from '../../services/authService';
import { UserContext } from '../../contexts/UserContext';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });
 
  const { username, password, passwordConf } = formData;

  const handleChange = (evt) => {
    setMessage('');
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const response = await signUp(formData);
    console.log('Signup response:', response); // Debug log
    
    if (response.token && response.user) {
      // Token is already stored in localStorage by authService
      // Just set the user in context
      setUser(response.user);
      
      // Show success message and navigate
      setMessage('Account created successfully!');
      navigate('/');
    } else {
      setMessage('Signup failed - no token received');
    }
  } catch (error) {
    console.error('Signup error:', error);
    setMessage(error.message);
  }
};

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username' // Fixed: was 'name', should be 'username'
            value={username}
            name='username'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='confirm'>Confirm Password:</label>
          <input
            type='password'
            id='confirm'
            value={passwordConf}
            name='passwordConf'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignUpForm;