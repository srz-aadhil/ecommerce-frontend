import { useState } from "react";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const phone = localStorage.getItem("phoneNo");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:9000/users/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({code: parseInt(otp) }),
      });

      if (!res.ok) throw new Error("Invalid or expired OTP code");

      alert("Verification successful. You can now log in.");
      localStorage.removeItem("phoneNo");
      // redirect logic here (navigate("/login"))
    } catch (err) {
      alert("Verification failed: " + err.message);
    }
  };

  const handleResend = async () => {
    await fetch("http://localhost:9000/users/verifycode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    alert("New OTP sent.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-yellow-100 to-green-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">OTP Verification</h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          We've sent an OTP to <span className="font-medium text-gray-800">{phone}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition duration-300"
          >
            Verify OTP
          </button>

          <button
            type="button"
            onClick={handleResend}
            className="w-full text-green-600 border border-green-600 py-2 rounded-md hover:bg-green-50 transition duration-300"
          >
            Resend OTP
          </button>
        </form>
      </div>
    </div>
  );
}
