import React from "react";
import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Shop All Products</h1>
      <p className="text-center text-gray-600">(Products will be listed here in future)</p>
    </div>
  );
};

export const GiftSets = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-6">Gift Sets</h1>
      <p className="text-center text-gray-600">Celebrate every moment with our curated gift hampers.</p>
      <div className="mt-6 text-center">
        <p className="text-sm">(Gift sets will appear here soon)</p>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Us</h1>
      <p className="text-center text-gray-700 mb-4">
        We'd love to hear from you. Reach out to us through WhatsApp or email.
      </p>
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://wa.me/254716788079"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
        >
          Chat on WhatsApp
        </a>
        <p className="text-gray-600">or email: justus@omondi.co.ke</p>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="bg-pink-200 p-4 flex justify-center gap-6 font-semibold text-pink-900">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/shop" className="hover:underline">Shop</Link>
      <Link to="/gift-sets" className="hover:underline">Gift Sets</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
};
