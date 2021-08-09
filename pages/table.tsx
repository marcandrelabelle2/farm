/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import Image from 'next/image';
import { useRouter } from "next/router";
import SideToSideSection from "../components/SideToSideSection";
import Feedback from "../components/Feedback";

import en from "../locales/en/pages/table";
import fr from "../locales/fr/pages/table";

const TablePage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const customer = {
    firstName: "Marc-Antoine",
    lastName: "Ranger",
    avatar: "/images/png/rounded_avatar.png",
  };
  const feedback = {
    comment:
      "Il pratique une culture sans pesticides \
      et fait pousser ses produits en gardant toujours en tête \
      qu’ils sont destinés à se retrouver dans une assiette",
    source: "https://tastet.ca/",
  };
  const heroImage = {
    backgroundSrc: "/images/jpg/knife_vegetables.jpg",
  };

  return (
    <Layout
      title="Table Parcelles"
      description="Contry table presents our to our clients an idea of the menu.
                 It shows our fresh products and menu items pictures."
    >
      <div>
        <SideToSideSection
          title={t.realproduct}
          subTitle={t.localingredients}
          cta={t.reservbutton}
          img={
            <img
              alt="Image of a food plate"
              src="/images/jpg/food_plate-min.jpg"
              title="A good looking food plate"
            />
          }
        ></SideToSideSection>

        <SideToSideSection
          title={t.pizza}
          subTitle={t.pizzadesc}
          cta={t.moreinfo}
          reversed={true}
          img={
            <img
              alt="Image of a pizza"
              src="/images/jpg/pizza-min.jpg"
              title="Pizza veges"
            />
          }
        ></SideToSideSection>

        <section className="py-16 md:py-24 bg-gray-100">
          <Feedback customer={customer} feedback={feedback} darken={true} />
        </section>
        <section>
          <div className="bg-auto bg-no-repeat bg-center w-full">
            <Image
              alt="Image of a knife and vegetables"
              src="/images/jpg/knife_vegetables.jpg"
              title="Knife with vegetables"
              width={1400}
              height={600}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TablePage;
