import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Display user info if logged in */}
      {currentUser ? (
        <>
          <h2>Welcome, {currentUser.name} 👋</h2>
          <p>Email: {currentUser.email}</p>

          {/* Logout button */}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <h2>Please log in first</h2>
      )}
    </div>
  );
}

export default Dashboard;