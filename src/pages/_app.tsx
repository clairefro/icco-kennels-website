import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import GlobalLayout from "../layouts/GlobalLayout";

/** Load global font on build. Applied as class on <main> */
import { Inria_Sans } from "@next/font/google";
import initAnalytics from "../utils/analytics/initAnalytics";

const inriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <main className={inriaSans.className}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </main>
  );
}

export default MyApp;
