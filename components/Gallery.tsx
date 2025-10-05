"use client";
import React from "react";
import Header from "./Header";
import AbacusImg from "@/public/Abacus.png";
import AboutUs from "@/public/AboutImg.jpeg";
import Image from "next/image";

const images = [AbacusImg, AboutUs, AbacusImg, AboutUs, AbacusImg, AboutUs];

const Gallery = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 space-y-12 sm:space-y-16 w-full bg-white"
      id="gallery"
    >
      <Header
        title="Gallery"
        description="Take a peek into our vibrant learning environment and see our students in action."
      />

      <div className="lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg relative w-full h-64 sm:h-64 md:h-72 lg:h-80 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={img}
              alt={`GalleryImage-${index}`}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 768px) 50vw,
                     (max-width: 1024px) 33vw,
                     25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
