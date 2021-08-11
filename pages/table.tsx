import Image from "next/image";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import avatar from "../public/images/temp/rounded_avatar.png";
import food from "../public/images/table/food_plate-min.jpg";
import pizza from "../public/images/table/pizza-min.jpg";
import knife from "../public/images/table/knife_vegetables.jpg";
import en from "../locales/en/pages/table";
import fr from "../locales/fr/pages/table";

const TablePage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
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
            width={590}
            height={480}
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
        <div className="flex-1 md:pl-3">
          <Image
            alt="Pizza menu example"
            src={pizza}
            width={558}
            height={372}
            priority
          />
        </div>
      </section>
      <Image alt="Critique picture" src={avatar} width={40} height={40} />
      <p>{t.quote}</p>
      <p>a</p>
      <p>a</p>
      <Image alt="Knife and vegetables" src={knife} width={1182} height={787} />
    </Layout>
  );
};

export default TablePage;
