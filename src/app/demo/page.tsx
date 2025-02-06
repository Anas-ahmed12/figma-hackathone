
import Image from "next/image";
// import Link from "next/link";

const CheckoutPage = () => {
  const demoProductData = [
    { pic: "/demo1.jpeg", title: "Ut diam consequat", color: "Brown", size: "XL", price: "$32.00" },
    { pic: "/demo2.jpeg", title: "Ut diam consequat", color: "Brown", size: "XL", price: "$32.00" },
    { pic: "/demo4.jpeg", title: "Ut diam consequat", color: "Brown", size: "XL", price: "$32.00" },
    { pic: "/demo3.jpeg", title: "Ut diam consequat", color: "Brown", size: "XL", price: "$32.00" },
    { pic: "/demo5.jpeg", title: "Ut diam consequat", color: "Brown", size: "XL", price: "$32.00" },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 sm:px-20 md:px-52">
        <h1 className="text-3xl text-black font-bold">Hekto Demo</h1>
      </div>

      {/* Left Section */}
      <div className="col-span-2 bg-white rounded-lg shadow-sm p-8 md:pl-[335px] md:pt-20 md:-mb-20">
        <h1 className="text-3xl font-bold text-[#151875] mb-6">Hekto Demo</h1>
        <p className="text-sm text-gray-500 mb-8">
          Cart / Information / <span className="font-bold text-[#151875]">Shipping</span> / Payment
        </p>
      </div>

      <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="col-span-1 lg:col-span-2 bg-[#f8f8fd] rounded-lg shadow-sm p-8">
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#151875] mb-4">Contact Information</h2>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <input
                  type="email"
                  placeholder="Email or mobile phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                />
                <a href="#" className="text-sm text-blue-500">
                  Already have an account? Log in
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                <input type="checkbox" className="w-4 h-4 text-green-500 rounded" />
                <span>Keep me up to date on news and exclusive offers</span>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-xl font-semibold text-[#151875] mb-4 lg:pt-10">Shipping address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm mb-4"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm mb-4"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            <button className="mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg text-sm font-semibold">
              Continue Shipping
            </button>
          </div>

          {/* Right Section for Products */}
          <div className="bg-white rounded-lg p-6">
            {/* Product Items */}
            <div className="space-y-6">
              {demoProductData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.pic}
                      alt={item.title}
                      width={80}
                      height={80}
                      className=" border bg-center bg-cover w-24 h-20"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    </div>
                  </div>
                  <p className="text-base font-semibold text-gray-800">{item.price}</p>
                </div>
              ))}
            </div>
          </div>


          </div>
                    {/* Subtotals, Shipping Info, and Checkout Button */}
                    <div className="bg-[#f8f8fd] p-6 mt-8 lg:-mt-5 lg:w-[408px] w-auto lg:ml-[1107px] ml-0">
            {/* Subtotals and Totals */}
            <div className="mt-8">
              <div className="flex items-center justify-between text-gray-800 font-semibold text-lg">
                <p>Subtotals:</p>
                <p>£219.00</p>
              </div>
              <div className="border-t my-4"></div>
              <div className="flex items-center justify-between text-gray-800 font-semibold text-lg">
                <p>Totals:</p>
                <p>£325.00</p>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mt-6 text-sm text-gray-500 flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Shipping & taxes calculated at checkout</span>
            </div>

            {/* Checkout Button */}
            <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-sm font-semibold">
              Proceed To Checkout
            </button>
              </div>
        </div>
    </>
  );
};

export default CheckoutPage;
