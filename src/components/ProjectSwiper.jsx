
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../styles/projectSwiper.scss";

import { Autoplay } from 'swiper/modules';

export default function ProjectSwiper({img1, img2, img3}) {
  return (
    <>
      <Swiper 
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{clickable: true}}
      className="mySwiper">
        <SwiperSlide><img src={img1} alt="one" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="one" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="one" /></SwiperSlide>
      </Swiper>
    </>
  );
}