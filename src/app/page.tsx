import DiscountItem from "@/components/discount";
import FeaturedProducts from "@/components/featured";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LatestProducts from "@/components/lastest";
import Navbar from "@/components/navbar";
import Shopex from "@/components/shopex";
import Top from "@/components/top";
import Treaditem from "@/components/treaditem";
import Trending from "@/components/trending";
import Trending2 from "@/components/trending2";

export default function Home() {
  return (
  <>
  <Top/>
  <Navbar/>
  <Hero/>
  <FeaturedProducts/>
  <LatestProducts/>
  <Shopex/>
  <Trending/>
    <Treaditem/>
    <Trending2/>
    <DiscountItem/>
  <Footer/>
  </>
  );
}
