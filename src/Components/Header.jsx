import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import axios from "axios";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { toast } from "react-toastify";

function Header() {
  const { input, setInput, Cart } = useContext(UserContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Fetch current user
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          "https://ecommerce-api-8ga2.onrender.com/user/me",
          { withCredentials: true }
        );
        setUser(response.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  // Logout function
  async function handleLogout(e) {
    e.preventDefault();
    try {
      await axios.post(
        "https://ecommerce-api-8ga2.onrender.com/user/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      toast.error("Logout Successful", {
        position: "bottom-right",
        autoClose: 1500,
        
      });
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  }

  return (
    <header className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">🛒 Ecommerce</Link>
        </div>

        {/* Hamburger - Mobile Only */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700 focus:outline-none"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Search - Desktop */}
        <div className="hidden md:flex w-1/3 mx-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for products..."
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Navigation */}
        <nav
          className={`absolute top-20 left-0 w-full bg-white md:static md:flex md:items-center md:space-x-8 md:w-auto md:bg-transparent px-6 py-4 md:p-0 transition-all duration-300 ease-in-out shadow-md md:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-800 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/cart"
                className="hover:text-blue-600 flex items-center"
              >
                Cart
                <span className="ml-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                  {Cart}
                </span>
              </Link>
            </li>

            {/* Login/Logout */}
            <li>
              {loading ? null : user ? (
                <button
                  className="p-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <LuLogOut size={23} />
                </button>
              ) : (
                <Link to="/login">
                  <button
                    className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                    title="Login"
                  >
                    <LuLogIn size={23} />
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Search */}
      <div className="px-6 md:hidden mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for products..."
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </header>
  );
}

export default Header;
