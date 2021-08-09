import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ActiveLink from "./ActiveLink";
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
                src="/images/logos/logo-parcelles.png"
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
            <li className="nav-item">
              <select
                onChange={changeLanguage}
                defaultValue={locale}
                className="nav-link text-center"
              >
                <option className="nav-link" value="en">
                  EN
                </option>
                <option className="nav-link" value="fr">
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
