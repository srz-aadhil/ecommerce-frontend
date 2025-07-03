import { useState } from 'react';

export default function CartPage() {
  // Dummy cart data (you can later replace this with actual state or API call)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Kerala Banana Chips',
      image: '/banana.webp',
      price: 299,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Kasavu Saree',
      image: '/saree.jpg',
      price: 1299,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'inc' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-green-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-red-800">Your cart is empty!!!.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-white shadow-md p-4 rounded flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-green-700">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, 'dec')}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 'inc')}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Total: ₹{total}
            </h3>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
