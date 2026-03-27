import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      {/* Navigation links */}
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/register">Register</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;