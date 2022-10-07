import React from "react";
import SvgIconLink from "../blocks/icons/SvgIconLink";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-icco-dark p-4">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2">
        <span>© ICCO KENNELS {year}</span>
        <div className="flex gap-4 items-center">
          <span>iccokennels@gmail.com</span>
          <div className="flex items-center gap-2">
            <SvgIconLink
              title="Instagram"
              svgSrc="/assets/icons/instagram-with-circle.svg"
              href="https://www.instagram.com/iccokennels/"
            />
            <SvgIconLink
              title="Facebook"
              svgSrc="/assets/icons/facebook-with-circle.svg"
              href="https://www.instagram.com/iccokennels/"
            />
            <SvgIconLink
              title="YouTube"
              svgSrc="/assets/icons/youtube-with-circle.svg"
              href="https://www.instagram.com/iccokennels/"
            />
            <SvgIconLink
              title="TikTok"
              svgSrc="/assets/icons/tiktok-with-circle.svg"
              href="https://www.tiktok.com/@iccokennels"
            />
            <SvgIconLink
              title="Twitter"
              svgSrc="/assets/icons/twitter-with-circle.svg"
              href="https://www.instagram.com/iccokennels/"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
