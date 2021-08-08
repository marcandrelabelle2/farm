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
    <footer className="bg-whitepure text-black p-5">
      <Link href="/">
        <a className="border-opacity-0 border-b-2 border-orange
                      hover:border-opacity-100">
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
          <h1 className="text-footerTitle font-semibold p-3">{t.eastern}</h1>
          <p className="text-footerText p-3">{t.offer}</p>
          <Link href="/contact">
            <a>
              <p className="border-opacity-0 border-orange border-2
                            font-semibold text-footerText max-w-xs p-3
                            hover:border-opacity-100">
                {t.contact}
              </p>
            </a>
          </Link>
        </div>
        <div className="col-start-1 p-2 md:col-start-2">
          <div className="grid grid-col-2">
            <div className="col-start-1 pl-5">
              <h1 className="font-semibold py-3">Services</h1>
              <p className="text-footerText">{t.delivery}</p>
              <p className="text-footerText">{t.meal}</p>
              <p className="text-footerText">{t.tourism}</p>
            </div>
            <div className="col-start-2 pl-8">
              <h1 className="font-semibold py-3">{t.open}</h1>
              <div className="grid grid-col-2">
                <div className="col-start-1">
                  <p className="text-footerText">{t.friday}</p>
                  <p className="text-footerText">{t.saturday}</p>
                  <p className="text-footerText">{t.sunday}</p>
                </div>
                <div className="col-start-2">
                  <p className="text-footerText">12h-20h</p>
                  <p className="text-footerText">12h-20h</p>
                  <p className="text-footerText">12h-20h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-right text-footerText p-5">© 2021 - marckit dev</p>
    </footer>
  );
};

export default Footer;
