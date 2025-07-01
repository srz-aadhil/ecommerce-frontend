const categories = [
  {
    name: "Spices",
    image: "/spices.avif",
  },
  {
    name: "Handicrafts",
    image: "/handicrafts.webp",
  },
  {
    name: "Snacks",
    image: "/snacks.avif",
  },
  {
    name: "Apparel",
    image: "/dress.jpg",
  },
];

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-900">Product Categories</h2>
        <p className="text-gray-600 mt-2">Explore Kerala's finest offerings</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {categories.map((cat, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-green-50 text-center">
              <h3 className="text-lg font-semibold text-green-800">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
