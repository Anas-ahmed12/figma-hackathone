import Image from 'next/image';
import Link from 'next/link';  // Import Link from next/link

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/feat-1.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/feat-2.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/feat-3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/feat-4.png",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1E40B7] mb-16 mt-5">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ width: "270px", height: "361px" }}
            >
              {/* Image */}
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg mt-9">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="responsive"
                  width={270}
                  height={160}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="mt-12 text-center">
                <h3 className="text-lg font-semibold text-[#FB2E86]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-transparent border-2 border-[#2F1AC4] text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <Link href={`/product/${product.id}`}>
                  <button className="py-2 px-4 bg-white text-[#2F1AC4] font-bold rounded-md shadow-md">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
