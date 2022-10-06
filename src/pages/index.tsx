import type { NextPage } from "next";
import SvgIcon from "../components/blocks/SvgIcon";
import PaddedContainer from "../components/containers/PaddedContainer";
import SpacerSm from "../components/spacers/SpacerSm";

const Home: NextPage = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <PaddedContainer>
        foo foo foo foofoo foofoo foofoo foofoo foofoo foofoo foofoo foofoo
        foofoo foofoo foofoo foofoo foofoo foofoo foofoo foofoo foofoo foofoo
        foofoo foofoo foofoo foofoo foofoo foofoo foo
      </PaddedContainer>
      <SpacerSm />
      <SvgIcon title="Read more" size="lg" src="/assets/icons/angle-down.svg" />
      {Array.apply(null, Array(200))
        .map(function () {})
        .map((i, j) => {
          return (
            <p key={j}>
              HOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOME
            </p>
          );
        })}
    </div>
  );
};

export default Home;
