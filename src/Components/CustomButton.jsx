const CustomButton = ({ fontSize, width, height }) => {
  return (
    <div className="relative group cursor-pointer inline-block">
      {/* Top-left border */}
      <a
        href="#contact"
        className="absolute h-10 w-[136px] border-2 border-borderColor bg-transparent rounded-sm -left-1.5 -top-3   transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 z-0"
        style={{ width: width, height: height }}
      ></a>

      {/* Button */}
      <a
        href="#contact"
        className="relative px-4 py-2 text-lg font-semibold rounded-sm bg-gradient-to-r to-toGradientBlue from-fromGradientBlue text-white z-10"
      >
        <span
          className="mx-1 [text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)]"
          style={{ fontSize: fontSize }}
        >
          Contact Us
        </span>
      </a>

      {/* Bottom-right border */}
      <a
        href="#contact"
        className="absolute h-10 w-[136px] border-2 border-borderColor bg-transparent rounded-sm -right-1.5 -bottom-2.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 z-10"
        style={{ width: width, height: height }}
      ></a>
    </div>
  );
};

export default CustomButton;
