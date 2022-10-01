import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Image
      width="64px"
      height="64px"
      className="rounded-full w-16"
      src="/assets/images/logo.jpeg"
      alt="Black and white cartoonized Cane Curso dog head looking to the left"
    />
  );
};

export default Logo;
