const Landing = ({ users, recipes }) => {
    console.log(users)
    return (
        <div>
            <h1>Welcome to my Recipe App!</h1>
            <p>Sign in now to post your own recipe and view recipes made by others!</p>
            <p>We currently have {users?.length || 0} users and {recipes?.length || 0} recipes!</p>
        </div>
    );
}
export default Landing;

