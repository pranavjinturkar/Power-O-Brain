import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-purple-500 to-sky-700 space-y-8">
      <Navbar />
      <Hero />
    </section>
  );
}
