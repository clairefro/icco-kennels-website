import React from "react";
import SvgIcon from "./SvgIcon";

type Props = {
  svgSrc: string;
  title: string;
  href: string;
  fill?: IconFill;
  size?: IconSize;
};

const defaults = {
  size: "sm",
  fill: "light",
};

const SvgIconLink: React.FC<Props> = ({ svgSrc, href, title, ...rest }) => {
  const rProps = { ...defaults, ...rest };
  const passedProps = {
    size: rProps.size as IconSize,
    fill: rProps.fill as IconFill,
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow">
      <SvgIcon src={svgSrc} title={title} {...passedProps} />
    </a>
  );
};

export default SvgIconLink;
