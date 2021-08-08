import Layout from "../components/Layout";
import { useRouter } from "next/router";

import en from "../locales/en/pages/contact";
import fr from "../locales/fr/pages/contact";

const TablePage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <Layout
      title="Contact"
      description="Page to contact members of the parcelles team.
                   You can find reservation, information and recruitment
                   emails."
    >
      <h1>{t.reservation}</h1>
      <p>{t.info}</p>
      <p>{t.recruitment}</p>
    </Layout>
  );
};
export default TablePage;
