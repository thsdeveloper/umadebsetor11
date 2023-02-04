import React, { useState } from 'react';
import {authenticate} from '@/services/auth-service';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await authenticate(email, password);
      window.location.href = '/';
    } catch (error) {
      setError('error.response.data.message');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-500 to-blue-500 p-4">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-lg font-medium mb-4">Login</h2>
        {error && (
          <div className="bg-red-100 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label
            className="block font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border p-2 w-full"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border p-2 w-full"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;