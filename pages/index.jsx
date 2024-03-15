import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { ReactTyped } from "react-typed";
import { fadeIn } from "../variants";

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("top", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-4xl"
          >
            {t('title')} <span className="text-accent">SlowSnakPierre</span>
          </motion.h1>
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {t('subtitle-1')}
            <br />
            <ReactTyped
              className="text-accent"
              strings={[
                "FullStack",
                "Roblox",
                "Garry's mod",
                "FiveM"
              ]}
              startDelay={1500}
              backDelay={1500}
              typeSpeed={75}
              backSpeed={75}
              loop
            ></ReactTyped>
            <br />
            {t('subtitle-2')}
          </motion.h2>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto max-sm:text-sm xl:mx-0 mb-10 xl:mb-16"
          >
            {t('description')}
          </motion.p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-96 max-h-96 absolute -bottom-32 lg:bottom-2 lg:bounce lg:right-[18%]"
        >
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});


export default Home;