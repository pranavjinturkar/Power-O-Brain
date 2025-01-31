import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section id="#hero" className="py-20 px-32 bg-blue-50 flex justify-between">
      <div className="flex flex-col">
        <div>
          <h1 className="text-6xl font-bold">Master Mathematics</h1>
          <h1 className="text-6xl font-bold">Through Ancient Wisdom</h1>
        </div>
        <p className="text-gray-600 mt-8 text-2xl w-3xl">
          Unlock your child&apos;s mathematical potential with our proven abacus
          training methods. Combine ancient techniques with modern learning
          approaches.
        </p>
        <div className="flex m-8">
          <CustomButton fontSize="20px" />
        </div>
      </div>
      <div className="shrink-0">
        <img
          src="src/assets/heroImg.jpg"
          className="object-cover rounded-md"
          style={{ width: "500px", height: "400px" }}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default Hero;
