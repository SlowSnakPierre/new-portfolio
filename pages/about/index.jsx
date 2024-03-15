import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaRoblox,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiRobloxstudio,
  SiLua,
  SiFivem,
} from "react-icons/si";

import Link from "next/link";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About = () => {
  const { t } = useTranslation('common');
  const [index, setIndex] = useState(0);

  const aboutData = [
    {
      title: t('about.skills-tab'),
      info: [
        {
          title: t("about.skills-tab.1"),
          icons: [
            FaHtml5,
            FaCss3,
            FaJs,
            FaReact,
            SiNextdotjs,
            SiFramer,
            FaWordpress,
          ],
        },
        {
          title: t("about.skills-tab.2"),
          icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
        },
        {
          title: t("about.skills-tab.3"),
          icons: [SiRobloxstudio, SiFivem, SiLua],
        },
      ],
    },
    {
      title: t('about.experience-tab'),
      info: [
        {
          title: t('about.experience-tab.1'),
          stage: "2012 - 2013",
        },
        {
          title: t('about.experience-tab.2'),
          stage: "2019 - 2022",
        },
        {
          title: t('about.experience-tab.3'),
          stage: "2023 - " + t('about.now'),
        },
        {
          title: t('about.experience-tab.4'),
          stage: "2022 - 2023",
        },
        {
          title: t('about.experience-tab.5'),
          stage: "2022 - " + t('about.now'),
        },
        {
          title: t('about.experience-tab.6'),
          stage: "2023 - " + t('about.now'),
        },
      ],
    },
    {
      title: t('about.credentials-tab'),
      info: [
        {
          title: t('about.credentials-tab.1'),
          title2: t('about.credentials-tab.1-2'),
          stage: "2026",
          link: "https://enigma-school.com/"
        },
        {
          title: t('about.credentials-tab.2'),
          title2: t('about.credentials-tab.2-2'),
          stage: "2028",
          link: "https://enigma-school.com/"
        },
      ],
    },
  ];

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left max-xl:overflow-y-scroll">

      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden min-[1500px]:flex absolute bottom-2/4 left-1.5 w-80 h-auto bounce"
      >
        <div className="translate-y-2/4">
          <Avatar />
        </div>
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            {t('about.title-1')}
            <span className='text-accent'>{t('about.title-2')}</span>
            {t('about.title-3')}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            {t('about.subtitle')}
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t('about.years')}
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t('about.clients')}
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {t('about.projects')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className={`py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start max-xl:pb-24`}>
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.link ?
                  <Link
                    href={item.link}
                    target="_blank"
                  >
                    <div className="underline underline-offset-[3px] text-accent">{item.title2}</div>
                  </Link>
                  :
                  (item.title2 &&
                    <div className="font-light mb-2 md:mb-0">{item.title2}</div>
                  )
                }
                <div className="hidden md:flex">»</div>
                {item.stage &&
                  <>
                    <div>{item.stage}</div>
                    <div className="hidden md:flex">«</div>
                  </>
                }

                {item.icons && <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>}
              </div>
            ))}
          </div>
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

export default About;
