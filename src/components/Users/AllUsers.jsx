import { Link } from 'react-router';

const AllUsers = ({ users, user }) => {
  return (
    <main>
      <div>
        <h1>All Registered Users:</h1>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id}>
              <p>
                <Link to={`/users/${user._id}`}>{user.username}</Link>
              </p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </main>
  );
};

export default AllUsers;
