import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center justify-center md:items-stretch md:justify-end space-x-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/experience" className={linkClass}>
              Experience
            </NavLink>
            <NavLink to="/skills" className={linkClass}>
              Skills
            </NavLink>
            <NavLink to="/interest" className={linkClass}>
              Interest
            </NavLink>
            <NavLink to="/awards" className={linkClass}>
              Awards
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-indigo-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/experience" className={linkClass}>
            Experience
          </NavLink>
          <NavLink to="/skills" className={linkClass}>
            Skills
          </NavLink>
          <NavLink to="/interest" className={linkClass}>
            Interest
          </NavLink>
          <NavLink to="/awards" className={linkClass}>
            Awards
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
