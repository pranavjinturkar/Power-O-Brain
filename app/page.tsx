import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <section className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <AboutUs />
      <Programs />
    </section>
  );
}
