import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import en from "../locales/en/navbar";
import fr from "../locales/fr/navbar";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "Parcelles",
  description = "Parcelles is a farm, a restaurant a vegetable supplyer country table.",
}: Props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta name="description" content={description}></meta>
      </Head>
      <header>
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
          <Link href="/veges">
            <a>{t.navVeges}</a>
          </Link>{" "}
          |{" "}
          <Link href="/table">
            <a>{t.navTable}</a>
          </Link>{" "}
          |{" "}
          <Link href="/hist">
            <a>{t.navHist}</a>
          </Link>{" "}
          |{" "}
          <Link href="/contact">
            <a>{t.navContact}</a>
          </Link>{" "}
          |{" "}
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
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>
          I<span>&apos;</span>m here to stay (Footer)
        </span>
      </footer>
    </div>
  );
};

export default Layout;
