import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import en from "../locales/en/components/navbar";
import fr from "../locales/fr/components/navbar";

const Navbar = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav>
      <Link href="/">
        <a>
          <Image
            alt="Logo of Parcelles"
            src="/logo-parcelles.png"
            height={66}
            width={249}
            priority
          />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/veges">
            <a>{t.navVeges}</a>
          </Link>
        </li>
        <li>
          <Link href="/table">
            <a>{t.navTable}</a>
          </Link>
        </li>
        <li>
          <Link href="/hist">
            <a>{t.navHist}</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>{t.navContact}</a>
          </Link>
        </li>
        <li>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="fr">
              FR
            </option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
