import type { NextPage } from "next";
import PageBanner from "../../components/banners/PageBanner/PageBanner";
import PaddedContainer from "../../components/containers/PaddedContainer";
import Section from "../../components/containers/Section";
import InstagramViewer from "../../components/Instagram/InstagramViewer";

type Props = {};

const Gallery: NextPage = (props: Props) => {
  return (
    <div className="mt-32">
      <Section>
        <PaddedContainer>
          <InstagramViewer />
        </PaddedContainer>
      </Section>
    </div>
  );
};

export default Gallery;
