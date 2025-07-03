export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Mallumart 🌴</h3>
          <p className="text-sm">
            Bringing the best of Kerala to your doorstep — fresh, fast, and affordable. 
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-md font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/categories" className="hover:underline">Categories</a></li>
            <li><a href="/offers" className="hover:underline">Today's Deals</a></li>
            <li><a href="/cart" className="hover:underline">Your Cart</a></li>
            <li><a href="/signup" className="hover:underline">Join Mallumart</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="text-md font-semibold mb-3">Help & Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/returns" className="hover:underline">Return Policy</a></li>
            <li><a href="/shipping" className="hover:underline">Shipping Info</a></li>
          </ul>
        </div>

        {/* Social / Info */}
        <div>
          <h4 className="text-md font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
            <li><a href="https://youtube.com" className="hover:underline">YouTube</a></li>
            <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-700 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Mallumart. Made with ❤️ in Kerala.
      </div>
    </footer>
  );
}
