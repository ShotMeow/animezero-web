import type { FC } from "react";

import Hero from "./Hero";
import Novelties from "./Novelties";
import Recommendations from "./Recommendations";
import ReleasedSoon from "./ReleasedSoon";

const HomeScreen: FC = () => {
  return (
    <main className="container">
      <Hero />
      <Novelties />
      <Recommendations />
      <ReleasedSoon />
    </main>
  );
};

export default HomeScreen;
