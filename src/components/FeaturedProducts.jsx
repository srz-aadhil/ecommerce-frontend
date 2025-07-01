const products = [
  {
    id: 1,
    name: "Organic Kerala Pepper",
    price: 299,
    image: "/pepper.webp",
  },
  {
    id: 2,
    name: "Kerala Coconut Oil",
    price: 350,
    image: "/coconut oil.webp",
  },
  {
    id: 3,
    name: "Banana Chips (1kg)",
    price: 199,
    image: "/banana.webp",
  },
  {
    id: 4,
    name: "Kasavu Saree",
    price: 1299,
    image: "/saree.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-900">Featured Products</h2>
        <p className="text-gray-600 mt-2">Top picks from Kerala for you</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-green-700 font-semibold mt-1">₹{product.price}</p>
            <button className="mt-auto bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
