import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    // Product data array
    const products = [
      {
        id: 1,
        name: "Executive Leather Briefcase",
        color: "White",
        size: "M",
        price: 200,
        quantity: 1,
        image: "/card1.jpeg", // Path to the image
      },
      {
        id: 2,
        name: "Opal Elegance Clutch",
        color: "black",
        size: "L",
        price: 150,
        quantity: 2,
        image: "/card2.jpeg",
      },
      {
        id: 3,
        name: "Saffron Breeze Shoulder Bag",
        color: "brown",
        size: "S",
        price: 300,
        quantity: 1,
        image: "/card3.jpeg"
      },
      {
        id: 4,
        name: "Executive Leather Briefcase",
        color: "White",
        size: "XL",
        price: 250,
        quantity: 1,
        image: "/card4.jpeg"
      },
      {
        id: 5,
        name: 'Executive Leather Briefcase',
        color: "black",
        size: "M",
        price: 100,
        quantity: 3,
        image: "/card5.jpeg",
      },
    ];
  
    return (
        <>
            {/* Header Section */}
      <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 md:px-52">
        <h1 className="text-3xl text-black font-bold">Shopping Curt</h1>
        <p className="text-sm mt-1 font-semibold">
        <Link href={"/"} className="hover:text-[#FB2E86]"> Home</Link>. Page . <span className="text-[#FB2E86]">Shopping Cart</span>
        </p>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Table */}
          <div className="lg:col-span-2 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 min-w-[600px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border">Product</th>
                  <th className="text-left px-4 py-2 border">Price</th>
                  <th className="text-left px-4 py-2 border">Quantity</th>
                  <th className="text-left px-4 py-2 border">Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="text-sm">
                    <td className="px-4 py-2 border flex items-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                        className="w-12 h-12 object-cover rounded mr-4"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-xs text-gray-500">
                          Color: {product.color}
                        </p>
                        <p className="text-xs text-gray-500">
                          Size: {product.size}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-2 border">${product.price}</td>
                    <td className="px-4 py-2 border">
                      <input
                        type="number"
                        defaultValue={product.quantity}
                        className="w-16 border rounded px-2 py-1 text-center"
                      />
                    </td>
                    <td className="px-4 py-2 border">
                      ${product.price * product.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {/* Buttons */}
            <div className="flex flex-wrap justify-between mt-4 gap-2">
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full sm:w-auto">
                Update Cart
              </button>
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 w-full sm:w-auto">
                Clear Cart
              </button>
            </div>
          </div>
  
          {/* Cart Totals */}
          <div className="space-y-6">
            <div className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">Cart Totals</h2>
              <div className="flex justify-between mt-4">
                <span>Subtotal:</span>
                <span>$219.00</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Total:</span>
                <span>$325.00</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Shipping is not calculated at checkout.
              </p>
              <button className="bg-green-500 text-white w-full mt-4 py-2 rounded hover:bg-green-600">
                Proceed To Checkout
              </button>
            </div>
  
            {/* Calculate Shipping */}
            <div className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">Calculate Shipping</h2>
              <form className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Region/State"
                  className="w-full border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border rounded px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border rounded px-4 py-2"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
                >
                  Calculate Shipping
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  