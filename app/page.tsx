import AboutUs from "@/components/AboutUs";
import FranchiseOpp from "@/components/FranchiseOpp";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import WhyAbacus from "@/components/WhyAbacus";

export default function Home() {
  return (
    <section className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <AboutUs />
      <Programs />
      <WhyAbacus />
      <Gallery />
      <Testimonials />
      <FranchiseOpp />
    </section>
  );
}
