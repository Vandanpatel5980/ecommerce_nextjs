import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg shadow-md">
                S
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Shop<span className="text-blue-600">Sphere</span>
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Discover premium products with modern shopping experience.
              Fast delivery, secure payments, and trusted quality for every
              customer.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <button className="p-2 rounded-xl cursor-pointer border border-gray-200 hover:bg-gray-100 transition">
                <FaGithub size={20} />
              </button>
              <button className="p-2 rounded-xl cursor-pointer border border-gray-200 hover:bg-gray-100 transition">
                <FaLinkedin size={20} />
              </button>
              <button className="p-2 rounded-xl cursor-pointer border border-gray-200 hover:bg-gray-100 transition">
                <FaTwitter size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Shop</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Categories</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Customer Support
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex items-center gap-3">
                <FaPhone size={18} />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope size={18} />
                <p>support@shopsphere.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 ShopSphere. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600 transition">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition">Terms</a>
            <a href="#" className="hover:text-blue-600 transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
