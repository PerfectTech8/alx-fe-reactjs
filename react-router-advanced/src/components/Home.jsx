import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile/details">Go to Profile</Link>
      <br />
      <Link to="/blog/1">Read Blog Post 1</Link>
    </div>
  );
};

export default Home;