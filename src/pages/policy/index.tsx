import type { NextPage } from "next";
import PageBanner from "../../components/banners/PageBanner/PageBanner";

type Props = {};

const Policy: NextPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        imgSrc="/assets/images/page-banners/home.png"
        pageTitle="Our Policy"
      />
    </div>
  );
};

export default Policy;
