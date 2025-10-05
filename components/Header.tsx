import React from "react";

type Props = {
  title: string;
  description: string;
  titleStyle?: string;
  descStyle?: string;
};

const Header = ({ title, description, descStyle, titleStyle }: Props) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-4">
      <h1 className={`text-5xl font-bold font-fredoka tracking-wide ${titleStyle}`}>
        {title}
      </h1>
      <h3 className={`text-xl text-center w-2xl tracking-wider ${descStyle}`}>{description}</h3>
    </div>
  );
};

export default Header;
