/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

//logo
import logo from "../public/images/logos/logo-parcelles-white.png";
//images
import hand from "../public/images/index/hand.png";
import basket from "../public/images/index/vegetables.png";
import chicken from "../public/images/index/chicken.png";
import dog from "../public/images/index/dog.png";
//translated
import beefen from "../public/images/index/en/beef_tartare.png";
import beeffr from "../public/images/index/fr/beef_tartare.png";
import squashen from "../public/images/index/en/squash.png";
import squashfr from "../public/images/index/fr/squash.png";
import vegcropen from "../public/images/index/en/vegcrop.png";
import vegcropfr from "../public/images/index/fr/vegcrop.png";

import en from "../locales/en/pages/index";
import fr from "../locales/fr/pages/index";

const IndexPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const beef = locale === "en" ? beefen : beeffr;
  const squash = locale === "en" ? squashen : squashfr;
  const vegcrop = locale === "en" ? vegcropen : vegcropfr;
  return (
    <Layout
      title="Parcelles Land"
      description="This is the landing page of the website.
                   It states diffent facts about animals, farming and nature's
                   respect."
    >
      <section className="homeimage">
        <div className="pt-5">
          <Image
            alt="Logo Parcelles white"
            src={logo}
            width={830}
            height={221}
            priority
          />
        </div>
        <div className="p-14">
          <h1>{t.project}</h1>
        </div>
        <div className="pt-7 pb-2">
          <button>{t.reservations}</button>
        </div>
      </section>
      <section className="seeus">
        <h1>{t.come}</h1>
        <div className="cardseeus">
          <div>
            <Image
              alt="Hand olding a crop"
              src={hand}
              width={200}
              height={200}
              layout="responsive"
            />
            <h2>Agriculture</h2>
            <p>{t.agriculture}</p>
          </div>
          <div>
            <Image
              alt="Bascket of vegetables"
              src={basket}
              width={200}
              height={200}
              layout="responsive"
            />
            <h2>{t.veges}</h2>
            <p>{t.vegesinfo}</p>
          </div>
          <div>
            <Image
              alt="Layin hens"
              src={chicken}
              width={200}
              height={200}
              layout="responsive"
            />
            <h2>{t.chick}</h2>
            <p>{t.chickinfo}</p>
          </div>
          <div>
            <Image
              alt="A dog"
              src={dog}
              width={200}
              height={200}
              layout="responsive"
            />
            <h2>{t.dog}</h2>
            <p>{t.doginfo}</p>
          </div>
        </div>
      </section>
      <section className="imglink">
        <div>
          <Link href="/veges">
            <Image
              alt="squash"
              src={squash}
              width={288}
              height={380}
              layout="responsive"
            />
          </Link>
        </div>
        <div>
          <Link href="/table">
            <Image
              alt="beef"
              src={beef}
              width={288}
              height={380}
              layout="responsive"
            />
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/hist">
            <Image
              alt="crop"
              src={vegcrop}
              width={288}
              height={380}
              layout="responsive"
            />
          </Link>
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
