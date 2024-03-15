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
import { useTranslation } from 'next-i18next'

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
      className="h-[250px] sm:h-[350px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-[200px] sm:h-[300px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
