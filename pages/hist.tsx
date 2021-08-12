import Image from "next/image";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import field from "../public/images/hist/tables_champ-min.jpg";
import chicken from "../public/images/hist/chicken_worker.jpg";
import en from "../locales/en/pages/hist";
import fr from "../locales/fr/pages/hist";

const HistoryPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <Layout
      title="History Parcelles"
      description="The story of the parcelles farm.
      It states how it all started, who's part of the journey."
    >
      <section>
        <Image
          alt="Picnic tables and field"
          src={field}
          width={6190}
          height={2256}
          priority
        />
      </section>
      <section className="hist">
        <h1>
          {t.title}
        </h1>
          <p>{t.nature}</p>
          <p>{t.hist}</p>
          <p>{t.effort}</p>
          <p className="md:col-start-1 md:col-span-full">{t.merci}</p>
          <p className="md:col-start-1">{t.dominic}</p>
      </section>
      <section>
        <Image alt="Chicken caring" src={chicken} width={6190} height={4127} />
      </section>
    </Layout>
  );
};

export default HistoryPage;
