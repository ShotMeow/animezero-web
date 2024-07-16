import type { Metadata, NextPage } from "next";
import { AboutUsScreen } from "@/screens/about-us";

export const metadata: Metadata = {
  title: "AnimeZero - О проекте",
};

const AboutUsPage: NextPage = () => {
  return <AboutUsScreen />;
};

export default AboutUsPage;
