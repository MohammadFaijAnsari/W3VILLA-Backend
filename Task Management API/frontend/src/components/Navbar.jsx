import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="font-bold">Task Management API</h1>
      <div className="space-x-4">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
