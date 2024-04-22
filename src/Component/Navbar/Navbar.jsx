import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/recipe">Recipe</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
