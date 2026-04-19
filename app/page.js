import Image from "next/image";

export default function Home() {
  const categories = [
    "Fashion",
    "Electronics",
    "Shoes",
    "Beauty",
  ];

  const products = [
    {
      id: 1,
      name: "Premium Sneakers",
      price: "$129",
      image: "/sneakers.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      image: "/smart-watche.jpg",
    },
    {
      id: 3,
      name: "Modern Headphones",
      price: "$149",
      image: "/headphone.jpg",
    },
    {
      id: 4,
      name: "Casual Hoodie",
      price: "$89",
      image: "/hoodie.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <p className="text-blue-600 font-semibold mb-3">
              New Collection 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Discover Your Perfect Online Shopping Experience
            </h1>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              Shop premium quality fashion, electronics, lifestyle products,
              and more with fast delivery and secure checkout.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 rounded-2xl font-medium transition shadow-md">
                Shop Now
              </button>
              <button className="border cursor-pointer border-gray-300 hover:border-blue-600 px-8 py-3 rounded-2xl font-medium transition">
                Explore More
              </button>
            </div>
          </div>

          <div className="relative h-[350px] md:h-[500px]">
            <Image
              src="/online_banner.jpg"
              alt="Shopping Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-semibold text-lg text-gray-800">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold mt-2">
                  {product.price}
                </p>
                <button className="w-full mt-4 bg-black cursor-pointer text-white py-3 rounded-2xl hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
