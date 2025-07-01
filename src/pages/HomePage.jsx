import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts/>
      {/* Upcoming: Categories + Products + Footer */}
    </div>
  );
}
