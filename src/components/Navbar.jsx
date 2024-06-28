import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-brown-600' : 'text-gray-600'}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-brown-600' : 'text-gray-600'}>
            Services
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-brown-600' : 'text-gray-600'}>
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
