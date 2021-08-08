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
        <a className="foot-link border-b-2">
          <Image
            alt="Logo of Parcelles orange"
            src="/logo-parcelles-orange.png"
            width={112}
            height={30}
          />
        </a>
      </Link>
      <div className="grid grid-col-2 p-2">
        <div className="col-start-1 border-black max-w-xl px-12 md:border-r-2">
          <h1 className="px-3">{t.eastern}</h1>
          <p className="p-3">{t.offer}</p>
          <Link href="/contact">
            <a>
              <p className="foot-link border-2 max-w-xs p-3">
                {t.contact}
              </p>
            </a>
          </Link>
        </div>
        <div className="col-start-1 p-2 md:col-start-2">
          <div className="grid grid-col-2">
            <div className="col-start-1 pl-5">
              <h1>Services</h1>
              <p>{t.delivery}</p>
              <p>{t.meal}</p>
              <p>{t.tourism}</p>
            </div>
            <div className="col-start-2 pl-8">
              <h1>{t.open}</h1>
              <div className="grid grid-col-2">
                <div className="col-start-1">
                  <p>{t.friday}</p>
                  <p>{t.saturday}</p>
                  <p>{t.sunday}</p>
                </div>
                <div className="col-start-2">
                  <p>12h-20h</p>
                  <p>12h-20h</p>
                  <p>12h-20h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-right p-5">© 2021 - marckit dev</p>
    </footer>
  );
};

export default Footer;
