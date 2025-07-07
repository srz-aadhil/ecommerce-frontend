import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Send login request
      const res = await fetch('http://localhost:9000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // 2️⃣ Handle errors from server
      if (!res.ok) {
        throw new Error(data.message || data.error || 'Login failed');
      }

      // 3️⃣ Success: store token & redirect
      alert('Login successful!');
      localStorage.setItem('token', data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate('/'); // or navigate('/dashboard')
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Welcome Back</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-500 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
