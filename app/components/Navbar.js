"use client";

import { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg shadow-md">
                S
              </div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Shop<span className="text-blue-600">Sphere</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href={"/"}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              href={"/shop"}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Shop
            </Link>
            <Link
              href={"/shop"}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Categories
            </Link>
            {/* <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition">
              New Arrivals
            </a> */}
            <Link
              href={"/contact"}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-2xl px-4 py-2 w-[320px] border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none px-3 w-full text-sm"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition">
              <Heart size={22} className="text-gray-700" />
            </button>

            <button className="relative p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition">
              <ShoppingCart size={22} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                2
              </span>
            </button>

            <Link href="/login">
              <button className="hidden sm:flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-2xl font-medium transition shadow-md">
                <User size={18} />
                Login
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition"
            >
              {menuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-4 flex flex-col gap-4">
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
