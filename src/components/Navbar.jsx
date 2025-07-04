import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-green-700 border-b-2 border-green-700 pb-1"
      : "text-gray-700 hover:text-green-700";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-green-800">
          MalluMart
        </NavLink>

        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/shop" className={linkStyle}>Shop</NavLink>
          <NavLink to="/categories" className={linkStyle}>Categories</NavLink>
          <NavLink to="/cart" className={linkStyle}>Cart</NavLink>
          <NavLink to="/login" className={linkStyle}>Login</NavLink>
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2 font-medium text-gray-700">
            <NavLink to="/" className={linkStyle}>Home</NavLink>
            <NavLink to="/shop" className={linkStyle}>Shop</NavLink>
            <NavLink to="/categories" className={linkStyle}>Categories</NavLink>
            <NavLink to="/cart" className={linkStyle}>Cart</NavLink>
            <NavLink to="/login" className={linkStyle}>Login</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
