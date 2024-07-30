import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Facilities from "@/components/Home/Facilities";
import Gallery from "@/components/Home/Gallery";
import Contact from "@/components/Home/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Facilities />
      <Gallery />
      <Contact />
    </>
  );
}
