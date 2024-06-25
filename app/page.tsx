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
      <section className="py-10 bg-slate-100 ">
        <div className="grid grid-cols-6 gap-2 container mx-auto items-center justify-center w-full">
          {[...Array(18)].map((_, i) => (
            <ProductSeling key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
