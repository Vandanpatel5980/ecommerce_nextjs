import Image from "next/image";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Premium Sneakers",
      price: "$129",
      category: "Fashion",
      image: "/sneakers.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      category: "Electronics",
      image: "/smart-watche.jpg",
    },
    {
      id: 3,
      name: "Modern Headphones",
      price: "$149",
      category: "Electronics",
      image: "/headphone.jpg",
    },
    {
      id: 4,
      name: "Casual Hoodie",
      price: "$89",
      category: "Fashion",
      image: "/hoodie.jpg",
    },
    {
      id: 5,
      name: "Luxury Backpack",
      price: "$99",
      category: "Accessories",
      image: "/bag.jpg",
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      price: "$159",
      category: "Electronics",
      image: "/earbuds.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <p className="text-blue-600 font-semibold mb-2">Our Collection</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Shop Products
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Explore premium fashion, electronics, accessories and lifestyle
            products with modern design and top quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="bg-white rounded-3xl border border-gray-200 p-6 h-fit shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Filters
            </h2>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
              <div className="space-y-3 text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Fashion
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Electronics
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Accessories
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Price</h3>
              <input
                type="range"
                className="w-full"
                min="0"
                max="500"
              />
              <p className="text-sm text-gray-500 mt-2">Up to $500</p>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {product.category}
                    </p>

                    <h3 className="font-semibold text-lg text-gray-900">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xl font-bold text-gray-900">
                        {product.price}
                      </p>

                      <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
