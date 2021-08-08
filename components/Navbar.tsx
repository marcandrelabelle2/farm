import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className="bg-whitepure mb-3 relative flex flex-wrap
                    justify-between px-2 py-3"
    >
      <div className="container px-4 mx-auto flex flex-wrap justify-between">
        <div
          className="w-full relative flex justify-between 
                        lg:w-auto lg:static lg:block lg:justify-start"
        >
          <Link href="/">
            <a
              className="border-green border-b-2 border-opacity-0 
                         hover:border-opacity-100dark font-semibold
                         hover:border-opacity-100"
            >
              <Image
                alt="Logo of Parcelles"
                src="/logo-parcelles.png"
                width={175}
                height={45}
                priority
              />
            </a>
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none border 
                       border-solid border-transparent rounded bg-transparent 
                       block lg:hidden outline-none focus:outline-none 
                       px-5 py-1"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={"lg:flex" + (navbarOpen ? " flex" : " hidden")}>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li
              className="nav-item cursor-pointer border-green border-b-2 
                           border-opacity-0 hover:border-opacity-100"
            >
              <Link href="/veges">
                <a
                  className="text-black flex font-semibold 
                            hover:opacity-80 px-5 py-2 "
                >
                  {t.navVeges}
                </a>
              </Link>
            </li>
            <li
              className="nav-item cursor-pointer border-green border-b-2 
                           border-opacity-0 hover:border-opacity-100"
            >
              <Link href="/table">
                <a
                  className="text-black flex font-semibold 
                            hover:opacity-80 px-5 py-2 "
                >
                  {t.navTable}
                </a>
              </Link>
            </li>
            <li
              className="nav-item cursor-pointer border-green border-b-2 
                           border-opacity-0 hover:border-opacity-100"
            >
              <Link href="/hist">
                <a
                  className="text-black flex font-semibold 
                            hover:opacity-80 px-5 py-2 "
                >
                  {t.navHist}
                </a>
              </Link>
            </li>
            <li
              className="nav-item cursor-pointer border-green border-b-2 
                           border-opacity-0 hover:border-opacity-100"
            >
              <Link href="/contact">
                <a
                  className="text-black flex font-semibold 
                            hover:opacity-80 px-5 py-2 "
                >
                  {t.navContact}
                </a>
              </Link>
            </li>
            <li className="nav-item px-1 py-2">
              <select
                onChange={changeLanguage}
                defaultValue={locale}
                className="text-black font-semibold 
                           cursor-pointer hover:opacity-80"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
