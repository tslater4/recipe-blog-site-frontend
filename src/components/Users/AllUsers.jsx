import { Link } from 'react-router';

const AllUsers = ({ users }) => {
  return (
    <main>
      <div>
        <h1>All Registered Users:</h1>
        <div class="users-list">
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
      </div>
    </main>
  );
};

export default AllUsers;
