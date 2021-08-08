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
    <nav className="bg-whitepure flex items-center justify-between flex-wrap p-3">
      <Link href="/">
        <a className="border-greendark font-semibold  border-b-2 border-opacity-0
                      hover:border-opacity-100">
          <Image
            alt="Logo of Parcelles"
            src="/logo-parcelles.png"
            width={175}
            height={45}
            priority
          />
        </a>
      </Link>
      <ul className="list-reset lg:flex justify-end flex-1 items-center">
        <li className="mr-6">
          <Link href="/veges">
            <a className="border-greendark font-semibold  border-b-2 border-opacity-0  hover:border-opacity-100">
              {t.navVeges}
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/table">
            <a className="border-greendark font-semibold  border-b-2 border-opacity-0  hover:border-opacity-100">
              {t.navTable}
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/hist">
            <a className="border-greendark font-semibold  border-b-2 border-opacity-0  hover:border-opacity-100">
              {t.navHist}
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/contact">
            <a className="border-greendark font-semibold  border-b-2 border-opacity-0  hover:border-opacity-100">
              {t.navContact}
            </a>
          </Link>
        </li>
        <li className="mr-6">
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-black font-semibold"
          >
            <option className="text-black font-semibold" value="en">
              EN
            </option>
            <option className="text-black font-semibold" value="fr">
              FR
            </option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
