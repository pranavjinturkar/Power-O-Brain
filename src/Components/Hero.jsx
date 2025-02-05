import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section
      id="#hero"
      className="py-20 px-32 bg-blue-50 md:flex flex-wrap justify-between"
    >
      <div className="flex flex-col">
        <div>
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold w-xs lg:w-2xl text-start">
            Master Mathematics
          </h1>
          <h1 className="lg:text-6xl md:text-4xl text-3xl lg:w-3xl  font-bold">
            Through Ancient Wisdom
          </h1>
        </div>
        <p className="text-gray-600 mt-8 text-2xl lg:w-3xl w-lg">
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
          src="./heroImg.jpg"
          className="object-cover rounded-md w-md md:w-md h-96"
          // style={{ width: "500px", height: "400px" }}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default Hero;
