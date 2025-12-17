import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Nested route renders here */}
      <Outlet />
    </div>
  );
};

export default Profile;