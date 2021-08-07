import Layout from "../components/Layout";
import { useRouter } from "next/router";

import en from "../locales/en/pages/table";
import fr from "../locales/fr/pages/table";

const TablePage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <Layout 
    title="Country table page"
    description="Contry table presents our to our clients an idea of the menu.
    It shows our fresh products and menu items pictures."
    >
      <h1>{t.realproduct}</h1>
      <h2>{t.localingredients}</h2>
      <p>{t.reservbutton}</p>
      <h1>{t.pizza}</h1>
      <h2>{t.pizzadesc}</h2>
      <p>{t.reservbutton}</p>
      <p>{t.quote}</p>
    </Layout>
  );
};

export default TablePage;
