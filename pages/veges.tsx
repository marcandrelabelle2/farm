import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import rob from "../public/images/critic/rodm.png";
import marc from "../public/images/critic/marc.png";
import basket from "../public/images/veges/basket-collect-min.jpg";
import green from "../public/images/veges/green-house-min.jpg";
import radish from "../public/images/veges/radish-close-min.jpg";
import en from "../locales/en/pages/veges";
import fr from "../locales/fr/pages/veges";

const VegesPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const critic = locale === "en" ? rob : marc;
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
            <button>
              <Link href="/contact">{t.delivbutton}</Link>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            alt="Employee collecting baskets"
            src={basket}
            width={6240}
            height={4160}
            layout="responsive"
            priority
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row-reverse">
        <div className="sbsitem">
          <div className="sbstext">
            <h1>{t.greenhouse}</h1>
            <p>{t.ghinfo}</p>
            <button>
              <a href="https://www.instagram.com/parcelles.austin/">{t.more}</a>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            alt="Greenhous image"
            src={green}
            width={3130}
            height={2075}
            layout="responsive"
            priority
          />
        </div>
      </section>
      <section className="critic">
        <Image alt="A critic picture" src={critic} width={125} height={125} />
        <h1>{t.quote1}</h1>
        <h1>{t.quote2}</h1>
        <p>{t.critic}</p>
        <a href={t.urlmedia}>{t.media}</a>
      </section>
      <section>
        <Image
          alt="Knife and vegetables"
          src={radish}
          width={6240}
          height={4160}
          layout="responsive"
        />
      </section>
    </Layout>
  );
};

export default VegesPage;
