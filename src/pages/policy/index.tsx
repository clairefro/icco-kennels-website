import type { NextPage } from "next";
import PageBanner from "../../components/banners/PageBanner/PageBanner";
import PaddedContainer from "../../components/containers/PaddedContainer";
import Section from "../../components/containers/Section";

type Props = {};

const Policy: NextPage = (props: Props) => {
  return (
    <div>
      <PageBanner
        imgSrc="/assets/images/page-banners/policy.jpg"
        pageTitle="Our Policy"
      />
      <Section>
        <PaddedContainer>
          <h2>Next Litter</h2>
          <p>
            Our next breeding will take place this fall so we look forward to
            producing our next litter of little superstars sometime around the
            first of the year.
          </p>
          <p>
            International Cane Corso of Ohio pups are AKC & ICCF registered.
            Tails docked, ears cropped and all shots up to date upon arrival.
            Great Temperaments and Champion Bloodlines.
          </p>
          <h2>Pricing and Guarantee</h2>
          <p>
            Pups are $3,000 USD and come with a 2 Year Health Guarantee. We will
            replace it as long as vaccinations are up to date.
          </p>
          <p>
            To reserve your spot we accept a deposit of $500. You make your
            selection in the order from which we’ve received your deposit. You
            pay the remaining balance when your pup is picked up or shipped.
          </p>
          <p>
            We are located in Akron, Ohio and we do offer courier services ✈️🚚
            .
          </p>
        </PaddedContainer>
      </Section>
    </div>
  );
};

export default Policy;
