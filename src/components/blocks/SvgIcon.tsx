import React from "react";
import SVG from "react-inlinesvg";

type Props = {
  src: string;
  title: string;
  fill?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

/** Tailwind sizes */
const sizeMap: { [key: string]: string } = {
  sm: "w-6",
  md: "w-12",
  lg: "w-20",
};

/** Tailwind fills */
const fillMap: { [key: string]: string } = {
  light: "fill-white",
  dark: "fill-black",
};

const defaults = {
  size: "md",
  fill: "light",
};

const SvgIcon: React.FC<Props> = ({ src, title, ...rest }) => {
  const rProps = { ...defaults, ...rest };

  /** Resolved values */
  const rSize = sizeMap[rProps.size];
  const rFill = fillMap[rProps.fill];

  return (
    <SVG
      className={`${rSize} ${rFill} opacity-80`}
      src={src}
      height="auto"
      title={title}
    />
  );
};

export default SvgIcon;
