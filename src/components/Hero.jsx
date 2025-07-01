import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    "/kerala.jpeg",
    "/pexels-enginakyurt-2894234.jpg",
    "/pexels-karolina-grabowska-4198655.jpg",
    "/pexels-vanessa-loring-5968219.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slideshow Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`
              absolute top-0 left-0 w-full h-full object-cover
              transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}
      </div>

      {/* Fixed Text Layer */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 bg-black/40">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Embrace the Soul of Kerala
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl text-white drop-shadow-md max-w-xl">
          Explore authentic spices, handlooms, crafts, and snacks all at your fingertips.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold rounded-full shadow-md transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}
