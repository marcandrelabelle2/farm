import Layout from "../components/Layout";
import { useRouter } from "next/router";

import en from "../locales/en/pages/veges";
import fr from "../locales/fr/pages/veges";

const VegesPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <Layout
      title="Vegetables Parcelles"
      description="The vegetables page presents our services to our clients.
                   It shows vegetables delivery for restaurants links
                   and greenhouse informations links."
    >
      <h1>{t.delivery}</h1>
      <h2>{t.dlvinfo}</h2>
      <p>{t.delivbutton}</p>
      <h1>{t.greenhouse}</h1>
      <h2>{t.ghinfo}</h2>
      <p>{t.more}</p>
      <p>{t.quote}</p>
    </Layout>
  );
};

export default VegesPage;
