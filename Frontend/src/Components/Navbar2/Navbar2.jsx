// import React, { useState } from 'react';
// import './Navbar2.css';
// import { assets } from '../../assets/assets';
// import { NavLink } from 'react-router-dom';

// const Navbar2 = () => {
//   const [opt, setopt] = useState("Home");

//   return (
//     <div className="nav">
//       <div className="navbar">
//         <div className="logo">
//           <img src={assets.logo} alt="Logo" />
//         </div>
//         <div className="list">
//           <ul>
//             <NavLink
//               to='/consumer'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("Home")}
//             >
//               <span>Home</span>
//             </NavLink>
//             <NavLink
//               to='/consumer/Shop'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("Shop")}
//             >
//               <span>Shop</span>
//             </NavLink>
//             <NavLink
//               to='/consumer/Cart'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("Cart")}
//             >
//               <span>Cart</span>
//             </NavLink>
//             <NavLink
//               to='/consumer/Profile'
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={() => setopt("Profile")}
//             >
//               <span>Profile</span>
//             </NavLink>
//             <a
//               href="#ContactUs"
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

// export default Navbar2;


// import React from 'react';
// import { useLocation, NavLink } from 'react-router-dom';
// import './Navbar2.css';
// import { assets } from '../../assets/assets';

// const Navbar2 = () => {
//   const location = useLocation();

//   return (
//     <div className="nav">
//       <div className="navbar">
//         <div className="logo">
//           <img src={assets.logo} alt="Logo" />
//         </div>
//         <div className="list">
//           <ul>
//             <NavLink
//               to='/consumer'
//               className={location.pathname === '/consumer' ? 'active' : ''}
//               end
//             >
//               <span>Home</span>
//             </NavLink>
//             <NavLink
//               to='/consumer/Shop'
//               className={location.pathname === '/consumer/Shop' ? 'active' : ''}
//             >
//               <span>Shop</span>
//             </NavLink>
//             <NavLink
//               to='/consumer/Cart'
//               className={location.pathname === '/consumer/Cart' ? 'active' : ''}
//             >
//               <span>Cart</span>
//             </NavLink>
//             <NavLink
//               to='/consumer/Profile'
//               className={location.pathname === '/consumer/Profile' ? 'active' : ''}
//             >
//               <span>Profile</span>
//             </NavLink>
//             <a href="#ContactUs" className="contact-us">
//               <span>Contact Us</span>
//             </a>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar2;




import React, { useState } from 'react';
import './Navbar2.css';
import { assets } from '../../assets/assets';
import { Link, NavLink } from 'react-router-dom';
const Navbar2 = () => {
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
        <a to='/consumer' href="/comsumer" className="nav-logo">
          <img src={assets.logo} alt="KRISHI SANJAL" />
        </a>
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
        
          <li to='/consumer' className="nav-item">
            <a href="/consumer" className="nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li  to='/consumer/shop' className="nav-item">
            <a href="/consumer/shop" className="nav-link" onClick={closeMenu}>
              Shop
            </a>
          </li>
          <li to='/consumer/cart' className="nav-item">
            <a href="/consumer/cart" className="nav-link" onClick={closeMenu}>
              Cart
            </a>
          </li>
          <li to='/consumer/profile' className="nav-item">
            <a href="/consumer/profile" className="nav-link" onClick={closeMenu}>
              Profile
            </a>
          </li>
          <li to='/consumer'className="nav-item">
            <a href="/consumer" className="nav-link" onClick={closeMenu}>
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

export default Navbar2;
