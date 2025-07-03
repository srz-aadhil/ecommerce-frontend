import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts/>
      <Footer/>
      {/* Upcoming: Categories + Products + Footer */}
    </div>
  );
}
