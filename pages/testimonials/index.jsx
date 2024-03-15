import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";

const Testimonials = () => {
  const { t } = useTranslation('common');

  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          {t("testimonials-1")}<span className="text-accent">{t("testimonials-2")}</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Testimonials;
