import { Brain, GraduationCap, Presentation } from "lucide-react";
import MethodologyStep from "./MethodologyStep";

const MethodologySection = () => {
  return (
    <section id="methodology" className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Teaching Methodology
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
              alt="Teaching methodology"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <MethodologyStep
              logo={<Presentation className="h-6 w-6 text-blue-600 mt-1" />}
              title="Step-by-Step Learning"
              description="Progressive curriculum designed to build strong foundations."
            />
            <MethodologyStep
              logo={<GraduationCap className="h-6 w-6 text-blue-600 mt-1" />}
              title="Certified Instructors"
              description="Expert teachers trained in both traditional and modern methods."
            />
            <MethodologyStep
              logo={<Brain className="h-6 w-6 text-blue-600 mt-1" />}
              title="Mental Math Training"
              description="Advanced techniques for quick mental calculations."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
