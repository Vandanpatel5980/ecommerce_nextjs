import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Left Side Image */}
        <div className="hidden lg:block relative min-h-[700px]">
          <Image
            src="/vector.png"
            alt="Login Banner"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text Over Image */}
          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white z-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4">
              Welcome Back
            </p>

            <h1 className="text-4xl font-bold leading-tight mb-6">
              Login to Your ShopSphere Account
            </h1>

            <p className="text-gray-200 leading-relaxed text-lg max-w-md">
              Access your cart, orders, wishlist, and enjoy a seamless shopping
              experience with secure checkout and fast delivery.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-10 md:p-12">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sign In
            </h2>

            <p className="text-gray-600 mb-8">
              Enter your details to continue shopping.
            </p>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
                  <FaEnvelope className="text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full ml-3 outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
                  <FaLock className="text-gray-400" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full ml-3 outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition shadow-md"
              >
                Login
              </button>

              {/* Divider */}
              <div className="relative text-center">
                <span className="bg-white px-4 text-sm text-gray-500 relative z-10">
                  Or continue with
                </span>

                <div className="absolute top-1/2 left-0 w-full border-t border-gray-200 -z-0"></div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                className="w-full border border-gray-300 py-3 rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
              >
                <FaGoogle />
                Sign in with Google
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-gray-600 mt-8">
              Don’t have an account?{" "}

              <Link
                href="/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}