import Layout from "../components/Layout";
import { useRouter } from "next/router";

import en from "../locales/en/hist";
import fr from "../locales/fr/hist";

const HistoryPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <Layout
      title="History page"
      description="The story of the parcelles farm.
      It states how it all started, who's part of the journey."
    >
      <h1>{t.title}</h1>
      <p>{t.nature}</p>
      <p>{t.hist}</p>
      <p>{t.effort}</p>
      <p>{t.merci}</p>
      <p>{t.dominic}</p>
    </Layout>
  );
};

export default HistoryPage;
