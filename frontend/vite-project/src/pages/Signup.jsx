import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmationpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const collectData = async (e) => {
    e.preventDefault();

    const { email, password, confirmationpassword } = user;

    if (password !== confirmationpassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3004/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmationpassword }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User signed up successfully!");
        console.log(data);
        navigate("/");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    // Fixed positioning for full-screen background
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      {/* SignUp Card with fixed width to match login page */}
      <div className="w-80 bg-gray-800 rounded-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Create an Account
          </h2>
          <form onSubmit={collectData} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmationpassword"
                value={user.confirmationpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full p-3 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <a
              href="/"
              className="text-blue-400 hover:text-blue-300"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;