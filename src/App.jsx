//dependencies
import { Routes, Route } from 'react-router'; 
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
// pages
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import AllUsers from './components/Users/AllUsers';
import OneUser from './components/Users/OneUser';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/users/:userId' element={<OneUser />} />
      </Routes>
    </>
  );
};

export default App;

