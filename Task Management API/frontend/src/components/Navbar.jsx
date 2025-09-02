import { Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext";
import { useContext, useState } from "react";
import { Menu, X } from "lucide-react"; // Icons
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide hover:text-indigo-400 transition"
        >
          Task Management
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <>
              
              <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                {user.name}
              </span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 px-6 py-4 space-y-4 overflow-hidden"
          >
            {user ? (
              <>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-indigo-400 transition duration-200"
                >
                  Home
                </Link>
                <p className="bg-indigo-600 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {user.name}
                </p>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-indigo-400 transition duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Register
                </Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
