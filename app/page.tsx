import Image from "next/image";

// Import components here
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Intergrations from "./components/Intergrations";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#d6d9d3] pt-15 overflow-y-hidden">
      <main className="
        w-full 
        max-w-6xl 
        h-auto
        bg-[#F6F6F4]
        py-7 pb-0
        ">
        <Nav />
        <Hero />
        <Features />
        <Intergrations />
        <Testimonies />
        <Footer />
      </main>
</div>
  );
}
