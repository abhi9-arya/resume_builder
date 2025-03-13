import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, clearAllUserError } from "@/Store/UserSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login(user.email, user.password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserError());
    }
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, isAuthenticated, error, navigate]);

  return (
    // Full-width background container that takes up the entire viewport height
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      {/* Fixed-width container for the login form */}
      <div className="w-80 bg-gray-800 rounded-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Welcome Back</h2>
          <p className="text-gray-400 mb-6 text-center text-sm">Login with your Apple or Google account</p>
          
          <div className="space-y-4 mb-6">
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded flex items-center justify-center space-x-2 transition-colors">
              <span className="text-lg">🍏</span>
              <span>Login with Apple</span>
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded flex items-center justify-center space-x-2 transition-colors">
              <span className="text-lg">🔵</span>
              <span>Login with Google</span>
            </button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-800 px-2 text-gray-400">Or continue with</span>
            </div>
          </div>
          
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-white text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="m@example.com"
                className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-white text-sm mb-1">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded font-medium transition-colors mt-2"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          
          <p className="mt-4 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up
            </a>
          </p>
          
          <p className="mt-4 text-center text-xs text-gray-500">
            By clicking continue, you agree to our{" "}
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;