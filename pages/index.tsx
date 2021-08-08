import { useRouter } from "next/router";
import Layout from "../components/Layout";

import en from "../locales/en/pages/home";
import fr from "../locales/fr/pages/home";

const IndexPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <Layout
      title="Land"
      description="This is the landing page of the website.
                   It states diffent facts about animals, farming and nature's
                   respect."
    >
      <h1>Parcelles</h1>
      <h2>{t.project}</h2>
      <p>{t.reservations}</p>
      <p>{t.agriculture}</p>
      <p>{t.fruitsveges}</p>
      <p>{t.vegesinfo}</p>
      <p>{t.chick}</p>
      <p>{t.chickinfo}</p>
      <p>{t.dog}</p>
      <p>{t.doginfo}</p>
      <p>{t.veges}</p>
      <p>{t.order}</p>
      <p>{t.table}</p>
      <p>{t.tableinfo}</p>
      <p>{t.hist}</p>
      <p>{t.startup}</p>
    </Layout>
  );
};

export default IndexPage;
