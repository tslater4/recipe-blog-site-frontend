import { useContext } from 'react';
import { Link } from 'react-router';

import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
    
    // load mainpage and wipe token
    const handleSignOut = () => {
        localStorage.removeItem('token');
        setUser(null);
    }

    return (
        <nav>
          {user ? (
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/users'>Users</Link></li>
              <li><Link to="/" onClick={handleSignOut}>Sign Out</Link></li>
            </ul>
          ) : (
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/sign-up'>Sign Up</Link></li>
              <li><Link to="sign-in">Sign In</Link></li>
            </ul>
          )}
        </nav>
      );
    };
  
export default NavBar;