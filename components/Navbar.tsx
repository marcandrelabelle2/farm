import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ActiveLink from "./ActiveLink";
import logo from "../public/images/logos/logo-parcelles.png";
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
    <nav>
      <div id="navbar-wrapper">
        <div id="menu-bars">
          <ActiveLink activeClassName="active" href="/">
            <a className="nav-item">
              <Image
                alt="Logo of Parcelles"
                src={logo}
                width={175}
                height={45}
                priority
              />
            </a>
          </ActiveLink>
          <button
            type="button"
            id="menu-toggle"
            aria-label="Main menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={"lg:flex" + (navbarOpen ? " flex" : " hidden")}>
          <ul>
            <ActiveLink activeClassName="active" href="/veges">
              <li className="nav-item">
                <a className="nav-link">{t.navVeges}</a>
              </li>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/table">
              <li className="nav-item">
                <a className="nav-link"> {t.navTable} </a>
              </li>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/hist">
              <li className="nav-item">
                <a className="nav-link">{t.navHist}</a>
              </li>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/contact">
              <li className="nav-item">
                <a className="nav-link">{t.navContact}</a>
              </li>
            </ActiveLink>
            <li>
              <select
                onChange={changeLanguage}
                defaultValue={locale}
                className="cursor-pointer text-center font-semibold py-3"
              >
                <option className="cursor-pointer font-semibold" value="en">
                  EN
                </option>
                <option className="cursor-pointer font-semibold" value="fr">
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
