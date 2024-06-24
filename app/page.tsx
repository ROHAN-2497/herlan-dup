import Banner from "@/components/home-section/banner";
import Navbar from "@/components/home-section/navbar";
import SticyNavbar from "@/components/home-section/sticynavbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SticyNavbar />
      <Banner />
    </main>
  );
}
