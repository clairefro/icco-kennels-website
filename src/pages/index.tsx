import type { NextPage } from "next";
import PageBanner from "../components/banners/PageBanner/PageBanner";
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
