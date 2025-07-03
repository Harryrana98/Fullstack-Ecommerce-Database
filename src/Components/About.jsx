function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-4">
          About Us
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700">📦 Start Shopping Today!</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Whether you're upgrading your wardrobe, hunting for the perfect gadget, or finding home essentials,
          we’re here to make it all possible—fast, simple, and safe.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Item */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-600 mb-2">✅ Wide Range of Products</h3>
          <p className="text-gray-600">
            From fashion to electronics, home decor to daily essentials—we’ve got something for everyone.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-green-600 mb-2">💰 Affordable Prices</h3>
          <p className="text-gray-600">
            Get the best deals without compromising on quality.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-purple-600 mb-2">🔒 Secure Shopping</h3>
          <p className="text-gray-600">
            Shop with confidence through our encrypted and safe checkout process.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-yellow-600 mb-2">🚚 Fast & Reliable Delivery</h3>
          <p className="text-gray-600">
            Get your orders delivered quickly, right to your doorstep.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-pink-600 mb-2">🤝 Customer-Centric Support</h3>
          <p className="text-gray-600">
            Our team is here to help you, always—before, during, and after your purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
