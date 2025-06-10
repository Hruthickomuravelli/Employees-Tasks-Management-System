import React, { useState } from 'react';
import employeeImg from '../../assets/employee.svg'; 

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setemail('');
    setpassword('');
  };

  return (
    <div className="flex h-screen w-screen gap-2">
      {/* Left Panel (Image only) */}
      <div className="w-1/2 bg-emerald-600 flex items-center justify-center">
        <img
          src={employeeImg}
          alt="Employee Illustration"
          className="max-w-[80%] max-h-[80%] object-contain"
        />
      </div>

      {/* Right Panel (Login Form) */}
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="shadow-2xl rounded-3xl px-12 py-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">
            Employee/Admin Login
          </h2>
          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-2 border-emerald-500 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-emerald-500 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-emerald-600 hover:bg-emerald-700 transition rounded-lg font-semibold text-lg shadow-md hover:shadow-xl"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


