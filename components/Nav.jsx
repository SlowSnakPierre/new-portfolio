import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from 'react';
import router from 'next/router';
import { useTranslation, i18n } from 'next-i18next';

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
  HiLanguage,
} from "react-icons/hi2";

import {
  US,
  FR,
} from "country-flag-icons/react/3x2";

const Nav = () => {
  const { t } = useTranslation('common');

  const pathname = usePathname();

  const languages = [
    { name: "English", code: "en", Icon: US },
    { name: "Français", code: "fr", Icon: FR },
  ];

  const changeLocale = async (locale) => {
    await router.push({
      route: router.pathname,
      query: router.query
    }, router.asPath, { locale, shallow: true });
    router.reload();
  }

  const currentLanguage =
    languages.find((language) => i18n.language === language.code) ||
    languages[0];

  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef]);

  const navData = [
    { name: t('nav-home'), path: "/", Icon: HiHome },
    { name: t('nav-about'), path: "/about", Icon: HiUser },
    { name: t('nav-services'), path: "/services", Icon: HiRectangleGroup },
    { name: t('nav-projects'), path: "/projects", Icon: HiViewColumns },
    {
      name: t('nav-contact'),
      path: "/contact",
      Icon: HiEnvelope,
    },
  ];

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            className={`${link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
        <div className="relative flex items-center group hover:text-accent transition-all duration-300" ref={buttonRef}>
          <div
            role="tooltip"
            className={`absolute pr-14 right-0 ${!isOpen && "hidden"} xl:group-hover:flex`}
          >
            <div className="flex absolute bottom-8 left-0 flex-col space-y-2 py-4 px-4 xl:relative xl:bottom-0 xl:left-0 xl:flex-row xl:space-y-0 xl:space-x-2 xl:px-0">
              {languages.map((lang, i) => (
                <button key={lang.code} onClick={() => changeLocale(lang.code)} className={`border-transparent ${lang.code !== currentLanguage && "group-hover:text-white"}`}><lang.Icon className="w-10 h-10 border-transparent focus:border-0" /></button>
              ))
              }
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiLanguage aria-hidden />
          </button>
        </div>
      </div>
    </nav >
  );
};

export default Nav;
