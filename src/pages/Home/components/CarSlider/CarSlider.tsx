import { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import style from "./carslider.module.css";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { CarCard, SkeletonCard } from "../../../../components";
import { useGetCarsQuery } from "../../../../rtk-store/services/cars";
import toast from "react-hot-toast";

SwiperCore.use([Navigation]);

const CarSlider: FC = () => {
  const { isLoading, data, error } = useGetCarsQuery();

  useEffect(() => {
    if (error && "status" in error) {
      toast.error("Failed to load cars");
    }
  }, [error]);

  console.log(error);

  return (
    <>
      {error && "status" in error ? (
        <div></div>
      ) : (
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
              {!isLoading ? (
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
      )}
    </>
  );
};

export default CarSlider;
