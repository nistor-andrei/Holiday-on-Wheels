import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import style from "./carslider.module.css";

const CarSlider: FC = () => {
  return (
    <>
      <div className={style.text}>
        <p>We have more than 250+ cars</p>
        <Link to="/">See more</Link>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarSlider;
