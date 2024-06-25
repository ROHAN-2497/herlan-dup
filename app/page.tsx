import Banner from "@/components/home-section/banner";
import Navbar from "@/components/home-section/navbar";
import ProductSeling from "@/components/home-section/productSeling";
import SticyNavbar from "@/components/home-section/sticynavbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SticyNavbar />
      <Banner />
      <ProductSeling />
    </main>
  );
}
