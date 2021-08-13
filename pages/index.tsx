import Image from "next/image";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import logo from "../public/images/logos/logo-parcelles-white.png";
import en from "../locales/en/pages/home";
import fr from "../locales/fr/pages/home";

const IndexPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <Layout
      title="Parcelles Land"
      description="This is the landing page of the website.
                   It states diffent facts about animals, farming and nature's
                   respect."
    >
      <section className="homeimage">
        <Image alt="Logo Parcelles white" src={logo} />
        <div className="p-14">
          <h1>{t.project}</h1>
        </div>
        <div className="pt-14">
          <button>{t.reservations}</button>
        </div>
      </section>
      <section className="homecard">
        <h1 className="text-3xl">Venez voir</h1>
        <div>
          <h2>Agriculture</h2>
          <p>{t.agriculture}</p>
          <h2>{t.veges}</h2>
          <p>{t.vegesinfo}</p>
          <h2>{t.chick}</h2>
          <p>{t.chickinfo}</p>
          <h2>{t.dog}</h2>
          <p>{t.doginfo}</p>
        </div>
      </section>
      <p>{t.order}</p>
      <p>{t.table}</p>
      <p>{t.tableinfo}</p>
      <p>{t.hist}</p>
      <p>{t.startup}</p>
    </Layout>
  );
};

export default IndexPage;
