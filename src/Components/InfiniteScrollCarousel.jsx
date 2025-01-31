const InfiniteScrollCarousel = () => {
  const imgs = [
    "src/assets/Wallpaper 1.jpg",
    "src/assets/Wallpaper 2.jpg",
    "src/assets/Wallpaper 3.jpg",
    "src/assets/Wallpaper 4.jpg",
    "src/assets/Wallpaper 5.jpg",
  ];

  const myStyle = {
    backgroundImage: "url(src/assets/life-bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    height: "130%",
    width: "100%",
    zIndex: "-1",
   //  opacity: "30",
  };

  return (
    <section
      className="py-20  pb-60 bg-[#0c111d] overflow-x-hidden flex flex-col"
      id="testimonials"
      style={myStyle}
    >
      <div className="flex justify-center gap-8 items-center pb-40">
        <div className="h-0.5 w-xl bg-white"></div>
        <h1 className="text-5xl font-serif font-light text-center text-white">
          Life at Power-O-Brain
        </h1>
        <div className="h-0.5 w-xl bg-white"></div>
      </div>
      <div className="flex gap-0 text-green-500 py-4 animate-infinite-spin">
        {[...imgs, ...imgs].map((num, index) => {
          return (
            <img
              src={num}
              alt={`img-${index}`}
              key={index}
              width={600}
              className={`relative object-cover rounded-md ${
                index % 2 == 0 ? "-translate-y-25" : "translate-y-25"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default InfiniteScrollCarousel;
