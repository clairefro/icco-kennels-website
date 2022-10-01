import type { NextPage } from "next";
import PageBanner from "../../components/banners/PageBanner/PageBanner";

type Props = {};

const Contact: NextPage = (props: Props) => {
  return (
    <div>
      <PageBanner imgSrc="/assets/images/page-banners/home.png" />
    </div>
  );
};

export default Contact;
