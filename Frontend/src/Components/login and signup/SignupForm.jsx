// import React from 'react';
// // import './signup.css';

// const SignupForm = ({ handleSubmit, formData, handleChange, error }) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign up for Krishi Sanjal</h2>

//       <input
//         type="text"
//         name="fullName"
//         placeholder="Full Name"
//         value={formData.fullName}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={formData.username}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="phoneNumber"
//         placeholder="Phone number"
//         value={formData.phoneNumber}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirm Password"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//         required
//       />

//       <select name="role" value={formData.role} onChange={handleChange}>
//         <option value="consumer">Consumer</option>
//         <option value="farmer">Farmer</option>
//       </select>

//       {formData.role === 'farmer' && (
//         <>
//           <input
//             type="text"
//             name="registrationCode"
//             placeholder="Registration Code"
//             value={formData.registrationCode}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="shopName"
//             placeholder="Shop Name"
//             value={formData.shopName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </>
//       )}

//       {error && <p>{error}</p>}

//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignupForm;


import React from 'react';
import './Signup.css';

const SignupForm = ({ handleSubmit, formData, handleChange, error }) => {
  return (
    <div className="body">
      <header className="header">
          <div className="header-container">
            <img src={assets.logo} alt="Krishi Sanjal Logo" className="logo" />
            <h1>Krishi Sanjal</h1>
          </div>
        </header>
      
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Sign up for Krishi Sanjal</h2>

        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="input-field"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="input-field"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="input-field"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="input-field"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            className="input-field full-width"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="consumer">Consumer</option>
            <option value="farmer">Farmer</option>
          </select>
        </div>

        {formData.role === 'farmer' && (
          <>
            <div className="input-group">
              <label htmlFor="registrationCode">Registration Code</label>
              <input
                type="text"
                id="registrationCode"
                name="registrationCode"
                className="input-field"
                placeholder="Registration Code"
                value={formData.registrationCode}
                onChange={handleChange}
                required
              />

              <label htmlFor="shopName">Shop Name</label>
              <input
                type="text"
                id="shopName"
                name="shopName"
                className="input-field"
                placeholder="Shop Name"
                value={formData.shopName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="address1">Village or Town</label>
              <input
                type="text"
                id="address1"
                name="address1"
                className="input-field"
                placeholder="Village or Town"
                value={formData.address1}
                onChange={handleChange}
                required
              />

              <label htmlFor="address2">City</label>
              <input
                type="text"
                id="address2"
                name="address2"
                className="input-field"
                placeholder="City"
                value={formData.address2}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="address3">State/Province</label>
              <input
                type="text"
                id="address3"
                name="address3"
                className="input-field"
                placeholder="State/Province"
                value={formData.address3}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/" className="create-account">Log In</a>
      </p>
    </div>
    </div>
  );
};

export default SignupForm;
