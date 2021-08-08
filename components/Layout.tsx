import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  backcolor?: string;
};

const Layout = ({
  children,
  title = "Parcelles",
  description = "Parcelles is a farm, a restaurant a vegetable supplyer country table.",
}: Props) => {
  return (
    <div className="bg-white">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description}></meta>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
