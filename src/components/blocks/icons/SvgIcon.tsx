import React from "react";
import SVG from "react-inlinesvg";

type Props = {
  src: string;
  title: string;
  fill?: IconFill;
  size?: IconSize;
  onClick?: () => void;
};

/** Tailwind sizes */
const sizeMap: { [key: string]: string } = {
  xs: "w-6",
  sm: "w-8",
  md: "w-12",
  lg: "w-20",
};

/** Tailwind fills */
const fillMap: { [key: string]: string } = {
  light: "fill-white",
  dark: "fill-black",
};

const defaults = {
  size: "sm",
  fill: "light",
};

const SvgIcon: React.FC<Props> = ({ src, title, onClick, ...rest }) => {
  const rProps = { ...defaults, ...rest };

  /** Resolved values */
  const rSize = sizeMap[rProps.size];
  const rFill = fillMap[rProps.fill];

  return (
    <SVG
      onClick={onClick}
      className={`${rSize} ${rFill} opacity-80 ${
        onClick ? "hover:cursor-pointer" : ""
      }`}
      src={src}
      height="auto"
      title={title}
    />
  );
};

export default SvgIcon;
