import React from "react";
import SVG from "react-inlinesvg";

type Props = {
  src: string;
  title: string;
  fill?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: 6,
  md: 12,
  lg: 20,
};

const fillMap = {
  light: "rgba(255,255,255,0.9)",
  dark: "rgba(0,0,0,0.7)",
};

const defaults = {
  size: "md",
  fill: "light",
};

const SvgIcon: React.FC<Props> = ({ src, title, ...rest }) => {
  const rProps = { ...defaults, ...rest };

  const rSize = `w-${sizeMap[rProps.size]}`;

  return (
    <SVG className={rSize} src={src} height="auto" title={title} fill="red" />
  );
};

export default SvgIcon;
