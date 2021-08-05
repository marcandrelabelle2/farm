import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

import en from "../locales/en/home";
import fr from "../locales/fr/home";

const IndexPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>{t.hello}👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
