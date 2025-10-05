import AboutUs from "@/components/AboutUs";
import FloatingBtn from "@/components/FloatingBtn";
import Footer from "@/components/Footer";
import FranchiseOpp from "@/components/FranchiseOpp";
import FrequentlyAskedQsn from "@/components/FrequentlyAskedQsn";
import Gallery from "@/components/Gallery";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import WhyAbacus from "@/components/WhyAbacus";

export default function Home() {
  return (
    <section className="min-h-screen w-full relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <Programs />
      <WhyAbacus />
      <Gallery />
      <Testimonials />
      <FranchiseOpp />
      <GetInTouch />
      <FrequentlyAskedQsn />
      <Footer />
      <FloatingBtn />
    </section>
  );
}
