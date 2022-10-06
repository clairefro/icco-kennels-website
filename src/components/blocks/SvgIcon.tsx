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

const fillMap: { [key: string]: string } = {
  light: "white",
  dark: "black",
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
      className={`${rSize} fill-${rFill} opacity-80`}
      src={src}
      height="auto"
      title={title}
    />
  );
};

export default SvgIcon;
