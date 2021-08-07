import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import en from "../locales/en/components/footer";
import fr from "../locales/fr/components/footer";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <footer>
      <Link href="/">
        <a>
          <Image
            alt="Logo of Parcelles orange"
            src="/logo-parcelles-orange.png"
            height={33}
            width={125}
          />
        </a>
      </Link>
      <h1>{t.eastern}</h1>
      <p>{t.offer}</p>
      <Link href="/contact">
        <a>
          <p>{t.contact}</p>
        </a>
      </Link>
      <h2>Services</h2>
      <p>{t.delivery}</p>
      <p>{t.meal}</p>
      <p>{t.tourism}</p>
      <h2>{t.open}</h2>
      <p>{t.friday}</p>
      <p>{t.saturday}</p>
      <p>{t.sunday}</p>
    </footer>
  );
};

export default Footer;
