import type { Metadata, NextPage } from "next";
import { CopyrightHoldersScreen } from "@/screens/copyright-holders";

export const metadata: Metadata = {
  title: "AnimeZero - Для правообладателей",
};

const CopyrightHoldersPage: NextPage = () => {
  return <CopyrightHoldersScreen />;
};

export default CopyrightHoldersPage;
