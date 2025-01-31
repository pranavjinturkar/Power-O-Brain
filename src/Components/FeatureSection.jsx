import { Brain, Trophy, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Power-O-Brain?
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <FeatureCard
            logo={<Brain className="h-8 w-8 text-blue-600" />}
            title="Cognitive Development"
            description="Enhance memory, concentration, and visualization skills through structured practice."
          />
          <FeatureCard
            logo={<Users className="h-8 w-8 text-blue-600" />}
            title="Small Group Classes"
            description="Personalized attention in small groups ensures optimal learning outcomes."
          />
          <FeatureCard
            logo={<Trophy className="h-8 w-8 text-blue-600" />}
            title="Proven Results"
            description="Over 95% of our students show significant improvement in mathematical abilities."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
