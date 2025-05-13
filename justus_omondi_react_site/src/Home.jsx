import React from "react";

const products = [
  {
    id: 1,
    name: "Men's Leather Watch",
    category: "Male Accessories",
    image: "https://via.placeholder.com/300x300?text=Watch",
    price: "KSh 3,500",
  },
  {
    id: 2,
    name: "Ladies Handbag",
    category: "Female Accessories",
    image: "https://via.placeholder.com/300x300?text=Handbag",
    price: "KSh 2,800",
  },
  {
    id: 3,
    name: "Men's Sneakers",
    category: "Male Shoes",
    image: "https://via.placeholder.com/300x300?text=Sneakers",
    price: "KSh 4,200",
  },
  {
    id: 4,
    name: "Ladies Heels",
    category: "Female Shoes",
    image: "https://via.placeholder.com/300x300?text=Heels",
    price: "KSh 3,000",
  },
  {
    id: 5,
    name: "Men's T-shirt",
    category: "Male Clothing",
    image: "https://via.placeholder.com/300x300?text=T-shirt",
    price: "KSh 1,200",
  },
  {
    id: 6,
    name: "Ladies Dress",
    category: "Female Clothing",
    image: "https://via.placeholder.com/300x300?text=Dress",
    price: "KSh 2,500",
  },
];

const Home = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-pink-100 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-pink-800 mb-8">
        Welcome to Justus Omondi
      </h1>
      <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl rounded-2xl p-4 text-center border border-pink-200 hover:shadow-pink-400"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{product.category}</p>
            <p className="text-xl text-pink-700 font-bold mb-4">{product.price}</p>
            <a
              href={`https://wa.me/254716788079?text=Hi%2C%20I'm%20interested%20in%20buying%20the%20${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              Buy on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
