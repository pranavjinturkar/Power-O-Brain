import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center py-10">
      <h1 className="font-bold text-3xl ">Power-O-Brain</h1>
      <div className="flex gap-8 items-center invisible md:visible">
        <a
          href="#features"
          className="text-lg text-gray-600 cursor-pointer hover:text-blue-600"
        >
          Features
        </a>
        <a
          href="#methodology"
          className="text-lg text-gray-600 cursor-pointer hover:text-blue-600"
        >
          Methodology
        </a>
        <a
          href="#testimonials"
          className="text-lg text-gray-600 cursor-pointer hover:text-blue-600"
        >
          Testimonials
        </a>
        <a
          href="#contact"
          className="text-lg text-gray-600 cursor-pointer hover:text-blue-600"
        >
          Contact
        </a>
      </div>
      <CustomButton fontSize="20px" />
    </div>
  );
};

export default Navbar;
