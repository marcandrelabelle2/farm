import Image from "next/image";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import field from "../public/images/contact/field-min.jpg";
import en from "../locales/en/pages/contact";
import fr from "../locales/fr/pages/contact";

const TablePage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fr" ? fr : en;
  return (
    <Layout
      title="Contact Parcelles"
      description="Page to contact members of the parcelles team.
                   You can find reservation, information and recruitment
                   emails."
    >
      <section className="flex flex-col md:flex-row">
        <div className="sbsitem">
          <div className="sbstext text-center text-8xl">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <h1>e-mail</h1>
            <p>parcelles.austin@gmail.com</p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            alt="People enjoying food"
            src={field}
            width={1897}
            height={1262}
            layout="responsive"
            priority
          />
        </div>
      </section>
    </Layout>
  );
};
export default TablePage;
