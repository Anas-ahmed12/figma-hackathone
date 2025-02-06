import Leatestblog from "@/components/blog";
import DiscountItem from "@/components/discount";
import FeaturedProducts from "@/components/featured";
// import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LatestProducts from "@/components/lastest";
import Logos from "@/components/logo";
// import Navbar from "@/components/navbar";
import Shopex from "@/components/shopex";
import Topitem from "@/components/topitem";
import Treaditem from "@/components/treaditem";
import Trending from "@/components/trending";
import Trending2 from "@/components/trending2";
import Ubdate from "@/components/ubdate";

export default function Home() {
  return (
  <>
  {/* <Top/> */}
  {/* <Navbar/> */}
  <Hero/>
  <FeaturedProducts/>
  <LatestProducts/>
  <Shopex/>
  <Trending/>
    <Treaditem/>
    <Trending2/>
    <DiscountItem/>
    <Topitem/>
    <Ubdate/>
    <Logos/>
    <Leatestblog/>
  {/* <Footer/> */}
  </>
  );
}
