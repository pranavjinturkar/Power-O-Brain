import React from "react";
import Header from "./Header";
import AbacusImg from "@/public/Abacus.png";
import AboutUs from "@/public/AboutImg.jpeg";
import Image from "next/image";

const images = [AbacusImg, AboutUs, AbacusImg, AboutUs, AbacusImg, AboutUs];

const Gallery = () => {
  return (
    <section className="py-24 space-y-20 w-full bg-white" id="gallery">
      <Header
        title="Gallery"
        description="Take a peek into our vibrant learning environment and see our students in action."
      />
      <div className="lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <Image
            src={img}
            key={index}
            alt="GalleryImage"
            className="rounded-2xl shadow-lg max-w-sm md:max-w-md h-64 w-full basic-transition hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
