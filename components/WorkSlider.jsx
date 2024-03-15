import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'next-i18next'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Infinity RP",
          path: "/infinityrp.png",
          link: "http://infinityroleplay.fr",
        },
        {
          title: "Site 97",
          path: "/site97.png",
          link: "https://www.roblox.com/games/6786187798",
        },
        {
          title: "Archaea",
          path: "/archaea.png",
          link: "https://www.roblox.com/games/10825023230",
        },
        {
          title: "LSPDFR",
          path: "/lspdfr.png",
          // link: "http://example.com",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "title",
    //       path: "/thumb4.jpg",
    //       link: "http://example.com",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb1.jpg",
    //       link: "http://example.com",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb2.jpg",
    //       link: "http://example.com",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb3.jpg",
    //       link: "http://example.com",
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  const { t } = useTranslation('common');

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-auto"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 xl:grid-cols-2 xl:grid-rows-2 gap-3">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image
                    className="aspect-video object-contain"
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {image.link ?
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <Link
                        href={image.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                      >
                        <div className="delay-100">{t('view')}</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          {t('project-1')}
                        </div>
                        {t('project-2') !== "" ?
                          <>
                            <div className="translate-y-[1000%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              {t('project-2')}
                            </div>
                            <div className="text-xl translate-y-[1500%] group-hover:translate-y-0 transition-all duration-300 delay-250">
                              <BsArrowRight aria-hidden />
                            </div>
                          </>
                          :
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight aria-hidden />
                          </div>
                        }
                      </Link>
                    </div>
                    :
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="delay-100">{t('project-3')}</div>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
