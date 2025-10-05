"use client";
import React from "react";
import Header from "./Header";
import Image from "next/image";

type TestimonialsProps = {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
};

const testimonials: TestimonialsProps[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "My daughter's math skills have improved dramatically since joining Power O Brain. She's now confident and loves solving problems mentally!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "The teachers are amazing and the program is perfectly structured. My son's concentration has improved significantly.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "Best investment in my child's education. The abacus method is truly magical for developing mental math skills.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Anita Rao",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "My child’s memory and focus have improved dramatically. The abacus classes are fun and engaging!",
    rating: 5,
  },
  {
    id: 5,
    name: "David Kim",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "Excellent teaching methodology. The progress my son made in just a few months is incredible.",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Meera Sharma",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "Highly recommend Power O Brain! The abacus program has boosted my child’s confidence in math.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 space-y-20 w-full bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]" id="testimonials">
      <Header
        title="What Parents Say"
        description="Hear from our satisfied parents about their children's amazing progress."
      />
      <div className="mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full hover:scale-105"
          >
            {/* Quote icon */}
              <p className="text-6xl text-primaryCyan w-fit h-fit font-fredoka">
                “
              </p>

            {/* Review text */}
            <p className="text-gray-800 font-openSans text-base mb-6">
              {t.review}
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4 mt-auto">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-900 font-nunito font-bold">
                  {t.name}
                </h4>
                <p className="text-gray-500 font-roboto text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
