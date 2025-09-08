const Landing = ({ user, users, recipes }) => {
    return (
        <div class="home-content">
            <h1>Welcome to my Recipe App!</h1>
            <p>Sign in now to post your own recipe and view recipes made by others!</p>
            {user ? (
                <p>We currently have {users?.length || 0} users and {recipes?.length || 0} recipes!</p>
            ) : (
                null
            )}
        </div>
    );
}
export default Landing;

