import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';
import { Link } from 'react-router';

const AllUsers = () => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setFetchedUsers(await userService.index());
        console.log("Fetched Users: " + fetchedUsers); // debug
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    if (user) fetchUsers();
  }, [user]);


  return (
    <main>
      <h1>Welcome, {user ? user.username : 'Guest'}</h1>
      <div>
        All registered users: {fetchedUsers.map((user) => (
          <div key={user._id}>
            <p><Link to={`/users/${user._id}`}>{user.username}</Link></p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllUsers;