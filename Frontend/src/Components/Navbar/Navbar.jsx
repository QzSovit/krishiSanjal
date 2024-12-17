// import React, { useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [opt, setopt] = useState("Home");

//   return (
//     <div className="header">
//       <div className="navbar">
//         <div className="logo">
//           <img src={assets.logo} alt="Logo" />
//         </div>
//         <div className="list">
//           <ul>
//             <NavLink
//               to='/farmer'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("Home")}
//             >
//               <span>Home</span>
//             </NavLink>
//             <NavLink
//               to='/farmer/My Products'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("My Products")}
//             >
//               <span>My Products</span>
//             </NavLink>
//             <NavLink
//               to='/farmer/Orders'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("Orders")}
//             >
//               <span>Orders</span>
//             </NavLink>
//             <NavLink
//               to='/farmer/Sales Analytics'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("Sales Analytics")}
//             >
//               <span>Sales Analytics</span>
//             </NavLink>
//             <NavLink
//               to='/farmer/Profile'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("Profile")}
//             >
//               <span>Profile</span>
//             </NavLink>
//             <a
//               href="/farmer/ContactUs"
//               onClick={() => {
//                 setopt("Contact Us");
//               }}
//               className={opt === "Contact Us" ? "active contact-us" : ""}
//             >
//               <span>Contact Us</span>
//             </a>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Close the menu when a navigation link is clicked
  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    
      <nav className="navbar">
        <a to='/farmer' href="/farmer" className="nav-logo">
          <img src={assets.logo} alt="KRISHI SANJAL" />
        </a>
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
        
          <li to='/farmer' className="nav-item">
            <a href="/farmer" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li  to='/farmer/My Products' className="nav-item">
            <a href="/farmer/My Products" className="nav-link" onClick={closeMenu}>
              My Products
            </a>
          </li>
          <li to='/farmer/Orders' className="nav-item">
            <a href="/farmer/Orders" className="nav-link" onClick={closeMenu}>
              Orders
            </a>
          </li>
          <li to='/farmer/Profile' className="nav-item">
            <a href="/farmer/Profile" className="nav-link" onClick={closeMenu}>
              Profile
            </a>
          </li>
          <li to='/farmer'className="nav-item">
            <a href="/farmer" className="nav-link" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    
  );
};

export default Navbar;
