import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

const handleSignup = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const formattedPhone = "+91" + phone.trim().replace(/^0+/, "");


  try {
    // 1️⃣ Register user
    const res = await fetch("http://localhost:9000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        phoneNo: formattedPhone,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || data.error || "Signup failed");
    }

    alert("Signup successful!");

    // 2️⃣ Store token & email in localStorage
    localStorage.setItem("token", data.token); // ✅ store JWT
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("phoneNo", data.phoneNo);

    // 3️⃣ Send OTP request with token in Authorization header
    const otpRes = await fetch("http://localhost:9000/users/verifycode", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${data.token}`, // ✅ Attach token here
      },
    });

    const otpData = await otpRes.json();

    if (!otpRes.ok) {
      throw new Error(otpData.message || otpData.error || "Failed to send OTP");
    }

    alert("OTP sent to your mobile number");

    // 4️⃣ Navigate to OTP verification page
    navigate("/verify");
  } catch (err) {
    alert("Error: " + err.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-green-200 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Create Your MalluCart Account</h1>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="9447XXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
