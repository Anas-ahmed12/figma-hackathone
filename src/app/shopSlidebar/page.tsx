import Link from 'next/link';
// import { BsChevronDown } from 'react-icons/bs';
import { FaRegHeart, FaSearchPlus, FaStar } from 'react-icons/fa';
// import { BsFillGridFill } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { HiCheck } from 'react-icons/hi';
// import { BiSearch } from 'react-icons/bi';
import Logos from '@/components/logo';
import Image from 'next/image';

const shopLeftData = [
  {
    img: "/slide-1.jpeg",
    title: "Dictum morbi",
    originalPrice: "$52.00",
    discountPrice: "$26.00",
    des: "This is a test product for testing the shop left sidebar product design.",
  },
  {
    img: "/slide-2.jpeg",
    title: "Sodales sit",
    originalPrice: "$52.00",
    discountPrice: "$26.00",
    des: "This is a test product for testing the shop left sidebar product design.",
  },
  {
    img: "/slide-3.jpeg",
    title: "Nibh varius",
    originalPrice: "$52.00",
    discountPrice: "$26.00",
    des: "I purchased this product for testing the shop left sidebar product design.",
  },
  {
    img: "/slide-4.jpeg",
    title: "Mauris quis",
    originalPrice: "$52.00",
    discountPrice: "$26.00",
    des: "I purchased this product for testing the shop left sidebar product design and I am happy with it.",
  },
  {
    img: "/slide-5.jpeg",
    title: "Morbi sagittis",
    originalPrice: "$52.00",
    discountPrice: "$26.00",
    des: "I purchased this product for testing the shop left sidebar product design and I am happy with the product.",
  },
  {
    img: "/slide-6.jpeg",
    title: "Ultricies venenatis",
    originalPrice: "$52.00",
    discountPrice: "$26.00",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    img: "/slide-7.jpeg",
    title: "Scelerisque dignissim",
    originalPrice: "$52.00",
    discountPrice: "$26.00",
    des: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const ShopLeft = () => {
  const icon = [
    {
      icon: <CgShoppingCart />,
    },
    {
      icon: <FaRegHeart />,
    },
    {
      icon: <FaSearchPlus />,
    },
  ];

  const filterData = [
    {
      icon: <HiCheck />,
      title: "Coaster Furniture",
    },
    {
      icon: <HiCheck />,
      title: "Fusion Dot High Fashion",
    },
    {
      icon: <HiCheck />,
      title: "Unique Furniture Restor",
    },
    {
      icon: <HiCheck />,
      title: "Dream Furniture Flipping",
    },
    {
      icon: <HiCheck />,
      title: "Young Repurposed",
    },
    {
      icon: <HiCheck />,
      title: "Green DIY furniture",
    },
  ];

  const discountData = [
    {
      icon: <HiCheck />,
      title: '20% Cashback',
    },
    {
      icon: <HiCheck />,
      title: '5% Cashback Offer',
    },
    {
      icon: <HiCheck />,
      title: '25% Discount Offer',
    },
  ];

  const reviewData = [
    {
      rating: 4,
      count: "(2341)",
    },
    {
      rating: 3,
      count: "(1726)",
    },
    {
      rating: 2,
      count: "(258)",
    },
    {
      rating: 2,
      count: "(25)",
    },
  ];

  const categoriesData = [
    {
      title: "Prestashop",
    },
    {
      title: "Magento",
    },
    {
      title: "Bigcommerce",
    },
    {
      title: "osCommerce",
    },
    {
      title: "3dcart",
    },
    {
      title: "Bags",
    },
    {
      title: "Jewellery",
    },
    {
      title: "Watches",
    },
  ];

  const priceData = [
    {
      title: "$0.00 - $150.00",
    },
    {
      title: "$150.00 - $350.00",
    },
    {
      title: "$150.00 - $504.00",
    },
    {
      title: "$450.00 +",
    },
  ];

  const colorName = [
    {
      title: "Blue",
    },
    {
      title: "Orange",
    },
    {
      title: "Brown",
    },
    {
      title: "Green",
    },
    {
      title: "Purple",
    },
    {
      title: "Sky",
    },
  ];

  return (
    <div className="max-w-[1650px] mx-auto px-4 lg:px-8 gap-11 lg:gap-16">
      <div className="md:container md:px-[1.3rem] px-[.8rem] md:pt-[98px] pt-12 flex items-center justify-between flex-wrap">
        <div className="flex flex-col">
          <h2 className="text-[#151875] text-xl lg:text-3xl font-bold dark:text-white">
            Ecommerce Accessories & Fashion Items
          </h2>
          <h4 className="text-gray-500 dark:text-white/70">
            About 9,620 results (0.62 seconds)
          </h4>
        </div>
      </div>

      <div className="md:container md:px-[1.3rem] px-[.8rem] md:flex md:mt-24 mt-6 mb-32">
        <div className="w-full md:w-[350px]">
          {/* Product Brand */}
          <div>
            <h3 className="text-[#151875] underline underline-offset-4 font-semibold pb-4 text-xl dark:text-white/70">
              Product Brand
            </h3>
            <div>
              {filterData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <input className="bg-[#2f2fd3] text-indigo-500 border-none" type="checkbox" />
                  <h4 className="text-[#4649a3] font-medium dark:text-white/70">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Discount Offer */}
          <div className="mt-12">
            <h3 className="text-[#151875] dark:text-white/70 underline underline-offset-4 pb-4 text-xl font-bold">
              Discount Offer
            </h3>
            <div>
              {discountData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <input className="bg-pink-300 text-pink-500 border-none" type="checkbox" />
                  <h4 className="text-[#4649a3] font-medium dark:text-white/70">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Item */}
          <div className="mt-12">
            <h3 className="text-[#151875] dark:text-white underline underline-offset-4 pb-4 text-xl font-bold">
              Rating Item
            </h3>
            <div>
              {reviewData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <input className="bg-yellow-500 text-yellow border-none" type="checkbox" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-${i < item.rating ? 'yellow-500' : 'gray-200'}`}
                      />
                    ))}
                  </div>
                  <h5 className="text-[#4649a3] font-medium dark:text-white/70">{item.count}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mt-12">
            <h3 className="text-[#151875] dark:text-white underline underline-offset-4 pb-4 text-xl font-bold">
              Categories
            </h3>
            <div>
              {categoriesData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <input className="bg-pink-500 text-pink-500 border-none dark:bg-white/70 dark:text-pink-500" type="checkbox" />
                  <h4 className="text-[#4649a3] font-medium dark:text-white/70">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mt-12">
            <h3 className="text-[#151875] dark:text-white/70 underline underline-offset-4 pb-4 text-xl font-bold">
              Price Filter
            </h3>
            <div>
              {priceData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <input className="bg-[#151875] text-indigo-500 border-none" type="checkbox" />
                  <h4 className="text-[#4649a3] font-medium dark:text-white/70">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mt-12">
            <h3 className="text-[#151875] dark:text-white/70 underline underline-offset-4 pb-4 text-xl font-bold">
              Color Filter
            </h3>
            <div className="flex flex-wrap gap-2">
              {colorName.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <input className="bg-white text-[#151875] border-none" type="checkbox" />
                  <h4 className="text-[#4649a3] font-medium dark:text-white/70">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Listings */}
        <div className="md:ml-8 lg:ml-32 w-full">
          {shopLeftData.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="md:flex gap-6 boxShadow p-6 items-center">
                <div>
                  {/* Image */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-[320px] h-[200px] object-cover bg-center"
                    width={320}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-[#151875] dark:text-white/70 text-lg font-bold">{item.title}</h3>
                  <div className="flex items-center gap-3">
                    <h4 className="text-[#151875] dark:text-white/70">{item.discountPrice}</h4>
                    <h4 className="text-pink-500 line-through">{item.originalPrice}</h4>
                  </div>
                  <p className="mt-3 md:w-[70%] text-gray-500">{item.des}</p>
                  <div className="flex items-center gap-4">
                    {icon.map((item, index) => (
                      <div key={index} className="flex justify-center mt-6 bg-white dark:bg-white/30 rounded-full p-4 shadow-2xl">
                        <Link href="" className="text-xl text-[#3438a4] dark:text-white/70">
                          {item.icon}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Logos/>
    </div>
  );
};

export default ShopLeft;
