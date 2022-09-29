import React from "react";
import Image from "next/image";

const PageBanner: React.FC = () => {
  return (
    <div
      className="w-full bg-icco-dark h-[calc(800px)] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/page-banners/home.png')" }}
    >
      {/*<Image
        className="z-0 relative"
        src="/assets/images/page-banners/home.png"
        alt="a dog"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
  />*/}
      <div className="relative">
        <h1>YOOOOOOOOOOOOO</h1>
      </div>
    </div>
  );
};

export default PageBanner;
