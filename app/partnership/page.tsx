import type { Metadata, NextPage } from "next";
import { PartnershipScreen } from "@/screens/partnership";

export const metadata: Metadata = {
  title: "AnimeZero - Сотрудничество",
};

const PartnershipPage: NextPage = () => {
  return <PartnershipScreen />;
};

export default PartnershipPage;
