import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';
import { Link, useParams } from 'react-router';



const oneUser = () => {
    const { userID } = useParams();
    const [fetchedUser, setFetchedUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        userService.getUserById(userID).then((data) => setFetchedUser(data));
    }, [userID]);

    return (
        <main>
            <h1>{user.username}'s page</h1>
            <Link to={`/users/${fetchedUser.id}`}>{fetchedUser.username}</Link>
            <p>Recipes: {fetchedUser.recipes?.length || 0}</p>
            <p>Account Created: {new Date(fetchedUser.createdAt).toLocaleDateString()}</p>
        </main>
    );
};



export default oneUser;