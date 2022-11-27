import type { NextPage } from "next";
import React from "react";
import PageBanner from "../../components/banners/PageBanner/PageBanner";
import SvgIcon from "../../components/blocks/icons/SvgIcon";
import PaddedContainer from "../../components/containers/PaddedContainer";
import Section from "../../components/containers/Section";

type Props = {
  children?: React.ReactNode;
  iconTitle: string;
  iconSrc: string;
};

const IconItem: React.FC<Props> = ({ children, iconSrc, iconTitle }) => {
  return (
    <span className="flex items-center gap-6">
      <SvgIcon size="xs" src={iconSrc} title={iconTitle}></SvgIcon>
      <span>{children}</span>
    </span>
  );
};

const Contact: NextPage = () => {
  return (
    <div>
      <PageBanner
        imgSrc="/assets/images/page-banners/contact.jpg"
        pageTitle="Contact Us"
      />
      <Section>
        <PaddedContainer>
          <h2>We&apos;d love to hear from you</h2>
          <p>
            Reach out for any inquiries about puppies, studs, upcoming litters
            or other information.
          </p>
          <ul>
            <li>
              <IconItem iconTitle="email" iconSrc="/assets/icons/envelope.svg">
                iccokennels@gmail.com
              </IconItem>
            </li>
            <li>
              <IconItem
                iconTitle="Instagram"
                iconSrc="/assets/icons/instagram-with-circle.svg"
              >
                <a
                  href="https://www.instagram.com/iccokennels/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  @iccokennels on Instagram
                </a>
              </IconItem>
            </li>
            <li>
              <IconItem
                iconTitle="Facebook"
                iconSrc="/assets/icons/facebook-with-circle.svg"
              >
                <a
                  href="https://m.facebook.com/people/Iccokennels/100085337604908/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Facebook
                </a>
              </IconItem>
            </li>
          </ul>
          <p>We are located in Akron, Ohio</p>
        </PaddedContainer>
      </Section>
    </div>
  );
};

export default Contact;
