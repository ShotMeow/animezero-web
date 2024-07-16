import type { Metadata, NextPage } from "next";
import { PrivacyPolicyScreen } from "@/screens/privacy-policy";

export const metadata: Metadata = {
  title: "AnimeZero - Политика конфиденциальности",
};

const PrivacyPolicyPage: NextPage = () => {
  return <PrivacyPolicyScreen />;
};

export default PrivacyPolicyPage;
