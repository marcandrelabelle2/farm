import Image from "next/image";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import basket from "../public/images/veges/basket-collect-min.jpg";
import green from "../public/images/veges/green-house-min.jpg";
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
      <section className="flex flex-col md:flex-row">
        <div className="sbsitem">
          <div className="sbstext">
            <h1>{t.delivery}</h1>
            <p>{t.dlvinfo}</p>
            <button>{t.delivbutton}</button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            alt="Employee collecting baskets"
            src={basket}
            width={590}
            height={480}
            priority
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row-reverse">
        <div className="sbsitem">
          <div className="sbstext">
            <h1>{t.greenhouse}</h1>
            <p>{t.ghinfo}</p>
            <button>{t.more}</button>
          </div>
        </div>
        <div className="flex-1 md:pl-2">
          <Image
            alt=""
            src={green}
            width={590}
            height={480}
            priority
          />
        </div>
      </section>
      <p>{t.quote1}</p>
    </Layout>
  );
};

export default VegesPage;
