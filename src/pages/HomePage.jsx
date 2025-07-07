import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Invalid user data in localStorage");
      }
    }
  }, []);

  return (
    <div className="relative">
      {/* Optional Navbar at the top if not already in layout */}
      {/* <Navbar /> */}

      {/* 🟢 Signed-in Badge */}
      {user && (
        <div className="absolute top-4 left-4 bg-white shadow-md rounded-full px-4 py-2 flex items-center space-x-2 z-50">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-800 font-semibold">
            Signed in as {user.email}
          </span>
        </div>
      )}

      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
