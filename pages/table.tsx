import Image from "next/image";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import rob from "../public/images/critic/rodm.png";
import irisgp from "../public/images/critic/irisgp.png";
import food from "../public/images/table/food_plate-min.jpg";
import pizza from "../public/images/table/pizza-min.jpg";
import knife from "../public/images/table/knife_vegetables.jpg";
import en from "../locales/en/pages/table";
import fr from "../locales/fr/pages/table";

const TablePage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const critic = locale === "en" ? rob : irisgp;
  return (
    <Layout
      title="Table Parcelles"
      description="Contry table presents our to our clients an idea of the menu.
                 It shows our fresh products and menu items pictures."
    >
      <section className="flex flex-col md:flex-row">
        <div className="sbsitem">
          <div className="sbstext">
            <h1>{t.realproduct}</h1>
            <p>{t.localingredients}</p>
            <button>{t.reservbutton}</button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            alt="People enjoying food"
            src={food}
            width={2951}
            height={2408}
            layout="responsive"
            priority
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row-reverse">
        <div className="sbsitem">
          <div className="sbstext">
            <h1>{t.pizza}</h1>
            <p>{t.pizzamenu}</p>
            <p>{t.pizzadesc}</p>
            <button>{t.reservbutton}</button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            alt="Pizza menu example"
            src={pizza}
            width={1872}
            height={1248}
            layout="responsive"
            priority
          />
        </div>
      </section>
      <section className="critic">
        <Image alt="A critic round picture" src={critic} width={125} height={125} />
        <h1>{t.quote1}</h1>
        <h1>{t.quote2}</h1>
        <p>{t.critic}</p>
        <a href={t.urlmedia}>{t.media}</a>
      </section>
      <section>
        <Image
          alt="Knife and vegetables"
          src={knife}
          width={1182}
          height={787}
          layout="responsive"
        />
      </section>
    </Layout>
  );
};

export default TablePage;
