import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import style from "./carslider.module.css";
import { fetchData } from "../../../../api/api";
import { defaultCars } from "./types";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ICars } from "../../../../components/CarCard/types";
import { CarCard, SkeletonCard } from "../../../../components";

SwiperCore.use([Navigation]);

const CarSlider: FC = () => {
  const [data, setData] = useState<ICars[]>(defaultCars);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setData, setLoading);
  }, []);

  return (
    <>
      <div className={style.text}>
        <p>We have more than 250+ cars</p>
        <Link to="/">See more</Link>
      </div>
      <div className={style.slider}>
        <div className={style.buttons}>
          <span className="custom_prev">&lt;</span>
          <span className="custom_next">&gt;</span>
        </div>
        <Swiper
          className={style.mySwiper}
          spaceBetween={30}
          slidesPerView={4}
          loop
          navigation={{
            nextEl: ".custom_next",
            prevEl: ".custom_prev",
          }}
        >
          {!loading ? (
            // @ts-ignore
            data.map((car) => {
              return (
                <SwiperSlide key={car.id} className={style.card}>
                  <CarCard car={car} />
                </SwiperSlide>
              );
            })
          ) : (
            <SkeletonCard />
          )}
          {}
        </Swiper>
      </div>
    </>
  );
};

export default CarSlider;
