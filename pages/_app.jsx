import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { appWithTranslation } from 'next-i18next';

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";
import { initReactI18next } from "react-i18next";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default appWithTranslation(MyApp, initReactI18next);
