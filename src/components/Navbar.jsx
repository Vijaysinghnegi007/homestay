import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ toggleTheme, theme }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "Home", path: "/homestay" },
    { label: "Our Rooms", path: "/rooms" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "FAQ", path: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/rooms?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== "/"
          ? "bg-white dark:bg-gray-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary-600 dark:text-primary-400"
          >
            HomeStay
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-primary-600 dark:text-primary-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Search Box */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rooms..."
                className="w-48 px-4 py-1 pl-10 text-sm border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-200"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* User Dropdown */}
            {isAuthenticated ? (
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {user?.name}
                  </span>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hidden group-hover:block">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-all duration-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
      >
        
        <div className="px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
