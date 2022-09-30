import type { NextPage } from "next";
import PageBanner from "../components/banners/PageBanner";

const Home: NextPage = () => {
  return (
    <div>
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
