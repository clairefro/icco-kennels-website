import type { NextPage } from "next";
import PageBanner from "../../components/banners/PageBanner/PageBanner";

type Props = {};

const Policy: NextPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        imgSrc="/assets/images/page-banners/policy.jpg"
        pageTitle="Our Policy"
      />
    </div>
  );
};

export default Policy;
