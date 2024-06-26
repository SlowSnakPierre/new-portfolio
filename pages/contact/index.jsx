import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { fadeIn } from "../../variants";
import { useState } from "react";
import Circles from "../../components/Circles";

const Contact = () => {
  const { t } = useTranslation('common');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.currentTarget;
    const formData = new FormData(myForm);
    console.log(formData);

    fetch("/api/contact", {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => response.json())
      .then((response) => alert(response.message))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false)
        myForm.reset();
      });
  };

  return (
    <div className="h-full bg-primary/30">

      <Circles />

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {t('contact-1')}<span className="text-accent">{t('contact-2')}</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            // only needed for production (in netlify) to accept form input
            data-netlify="true"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder={t("contact-name")}
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact-email")}
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder={t("contact-subject")}
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder={t("contact-message")}
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {t('contact-button')}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Contact;
