import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'next-i18next';
import Link from "next/link";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  const { t } = useTranslation('common');

  const serviceData = [
    {
      Icon: RxCrop,
      title: t("service-1"),
      description: t("service-1-desc"),
    },
    {
      Icon: RxPencil2,
      title: t("service-2"),
      description: t("service-2-desc"),
    },
    {
      Icon: RxDesktop,
      title: t("service-3"),
      description: t("service-3-desc"),
    },
    {
      Icon: RxReader,
      title: t("service-4"),
      description: t("service-4-desc"),
    },
    {
      Icon: RxRocket,
      title: t("service-5"),
      description: t("service-5-desc"),
    },
  ];

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[175px] max-[320px]:h-[225px] sm:h-[300px] md:h-[350px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <Link href="/contact">
            <div className="bg-[rgba(65,47,123,0.15)] relative h-[125px] max-[320px]:h-[175px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">
                <item.Icon aria-hidden />
              </div>

              <div className="mb-8">
                <div className="mb-2 md:text-lg text-sm">{item.title}</div>
                <p className="max-w-[350px] leading-normal max-md:text-xs">{item.description}</p>
              </div>

              <div className="md:-translate-x-32 md:absolute md:bottom-3 md:left-4 group-hover:translate-x-0 text-lg flex transition-all duration-300">
                <span className="max-md:hidden opacity-0 group-hover:opacity-100">Me contacter</span>
                <RxArrowTopRight
                  className="text-3xl group-hover:ml-3 group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
