import Logos from "@/components/logo"
import Products from "@/components/products"
import Link from "next/link"


export default function page() {
  return (
    <>
        <div className="bg-[#F6F5FF] w-full h-64 flex flex-col justify-center px-5 md:px-52">
        <h1 className="text-3xl text-black font-bold">Shop List</h1>
        <p className="text-sm mt-1 font-semibold">
          <Link href={"/"} className="hover:text-[#FB2E86]">
            Home
          </Link>
          . Page . <span className="text-[#FB2E86]">Shop List</span>
        </p>
      </div>
       {/* Sort and Filter */}
       <div className="pt-12 pb-8 text-[#00003f] flex flex-wrap justify-between items-center px-5 md:px-52">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-[#151875]">
            Ecommerce Accessories & Fashion Item
          </h2>
          <p className="text-sm mt-1 font-semibold text-gray-400">
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Sort Options */}
        <div className="flex flex-wrap items-center space-x-4 md:space-x-6">
          {/* Per Page */}
          <div className="flex items-center space-x-2">
            <label htmlFor="perPage" className="text-sm text-[#151875]">
              Per Page:
            </label>
            <input
              id="perPage"
              type="text"
              className="w-12 h-6 border border-gray-300 px-1"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center space-x-2">
            <label htmlFor="sortBy" className="text-sm text-[#151875]">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="h-6 border border-gray-300 text-sm px-1 cursor-pointer"
            >
              <option value="best">Best Match</option>
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
            </select>
          </div>

          {/* View Options */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#151875]">View:</span>
            <div className="flex space-x-1">
              <div className="w-4 h-4 border border-[#00003f] bg-[#00003f]"></div>
              <div className="w-4 h-4 border border-[#00003f]"></div>
            </div>
          </div>
        </div>
      </div>

          {/* Listing Products */}
        
    <div className="p-4 min-h-screen">
      <Products
        name="Accumsan tincidunt"
        price={26.0}
        oldPrice={52.0}
        rating={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        colors={["#DE9034", "#E60584", "#5E37FF"]} // red, blue, orange
        image="/Product1.jpeg"
      />
       <Products
        name="In nulla"
        price={26.0}
        oldPrice={52.0}
        rating={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        colors={["#DE9034", "#E60584", "#5E37FF"]} // red, blue, orange
        image="/Product2.jpeg"
      />
       <Products
        name="Vel sem"
        price={26.0}
        oldPrice={52.0}
        rating={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        colors={["#DE9034", "#E60584", "#5E37FF"]} // red, blue, orange
        image="/Product3.jpeg"
      />
        <Products
        name="Porttitor cum "
        price={26.0}
        oldPrice={52.0}
        rating={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        colors={["#DE9034", "#E60584", "#5E37FF"]} // red, blue, orange
        image="/Product4.jpeg"
      />
       <Products
        name="Nunc in"
        price={26.0}
        oldPrice={52.0}
        rating={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        colors={["#DE9034", "#E60584", "#5E37FF"]} // red, blue, orange
        image="/Product5.jpeg"
      />
       <Products
        name="Vitae facilisis"
        price={26.0}
        oldPrice={52.0}
        rating={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        colors={["#DE9034", "#E60584", "#5E37FF"]} // red, blue, orange
        image="/Product6.jpeg"
      />
        <Products
        name="Curabitur lectus"
        price={26.0}
        oldPrice={52.0}
        rating={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
        colors={["#DE9034", "#E60584", "#5E37FF"]} // red, blue, orange
        image="/Product1.jpeg"
      />
    </div>
    <Logos/>
  
    </>
  )
}
