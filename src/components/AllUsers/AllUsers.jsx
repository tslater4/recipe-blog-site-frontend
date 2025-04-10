// todo: clicking username links to their page (only if they have a post made!)
// this filename sucks but i already have like 19 things named "user" "users" etc i'd rather mix it up for my own sanity
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';

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
      <h1>Welcome, {user.username}</h1>
      <div>
        All registered users: {fetchedUsers.map((user) => (
          <div key={user._id}>
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllUsers;