import React from "react";

type Props = {
  title: string;
  description: string;
  titleStyle?: string;
  descStyle?: string;
};

const Header = ({ title, description, descStyle, titleStyle }: Props) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-3 sm:gap-4 px-4 text-center">
      <h1
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-fredoka tracking-wide leading-tight ${titleStyle}`}
      >
        {title}
      </h1>
      <h3
        className={`text-base sm:text-lg lg:text-xl max-w-xl sm:max-w-2xl text-black/70 tracking-wide ${descStyle}`}
      >
        {description}
      </h3>
    </div>
  );
};

export default Header;
