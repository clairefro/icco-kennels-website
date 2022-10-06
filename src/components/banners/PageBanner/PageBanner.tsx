import React from "react";
import SvgIcon from "../../blocks/SvgIcon";

import angleDownSvg from "../../../icons/angle-down.svg";

type Props = {
  imgSrc: string;
  pageTitle: string;
};

const PageBanner: React.FC<Props> = ({ imgSrc, pageTitle }) => {
  return (
    <>
      <div
        className="w-full bg-icco-dark h-[calc(800px)] bg-cover bg-center"
        style={{
          backgroundImage: `url('${imgSrc}')`,
        }}
      >
        <div className="icco-page-banner-title absolute text-3xl md:text-6xl uppercase">
          <h1>{pageTitle}</h1>
        </div>
        <div className="w-screen h-[calc(800px)] bg-black absolute opacity-50"></div>
        <div className="icco-page-banner-arrow absolute">
          <SvgIcon
            title="Read more"
            size="lg"
            src="/assets/icons/angle-down.svg"
          />
        </div>
      </div>
    </>
  );
};

export default PageBanner;

// {/*<Image
//         className="z-0 relative"
//         src="/assets/images/page-banners/home.png"
//         alt="a dog"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//   />*/}
