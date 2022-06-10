import {FC, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import style from "./carslider.module.css";
import {fetchData} from "../../../../api/api";
import {defaultCars, ICars} from "./types";
import gearbox from "../../../../assets/gearbox.svg";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import SwiperCore, {Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import {Skeleton} from "@mui/material";

SwiperCore.use([Navigation]);

const CarSlider: FC = () => {
    const [data, setData] = useState<ICars[]>(defaultCars);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
        fetchData(setData, setLoading);
    }, []);

    console.log(loading);
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
                                    <div className={style.card__car}>
                                        {!loading ? (
                                            <img src={car.img} alt={car.model}/>
                                        ) : (
                                            <Skeleton
                                                variant="rectangular"
                                                width={210}
                                                height={118}
                                                sx={{
                                                    bgColor: "grey.700",
                                                    margin: "2rem 0",
                                                    borderRadius: "10px",
                                                }}
                                            />
                                        )}
                                        <p>{car.model}</p>
                                        <div className={style.info}>
                                            <div className={style.info__left}>
                                                <p>
                                                    <img src={gearbox} alt="gearbox"/>
                                                    {car.gearbox}
                                                </p>
                                                <p>
                                                    <LocalGasStationIcon/>
                                                    {car.fuelType}
                                                </p>
                                            </div>
                                            <div className={style.info__right}>
                                                <p>
                                                    <SpeedIcon/>
                                                    {car.HP}HP
                                                </p>
                                                <p>
                                                    <AirlineSeatReclineExtraIcon/>
                                                    {car.seats}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className={style.price}>
                                        <p>${car.price}/per day</p>
                                        <Link to={`/car/${car.id}`}>Rent now &#8594;</Link>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    ) : (
                        <div className={style.skeletonContainer}>
                            <div className={style.card}>
                                <Skeleton
                                    variant="rectangular"
                                    width={210}
                                    height={118}
                                    sx={{
                                        bgColor: "grey.700",
                                        margin: "2rem 0",
                                        borderRadius: "10px",
                                    }}
                                />
                                <Skeleton
                                    height={20}
                                    style={{marginBottom: 6}}
                                    sx={{bgColor: "grey.700"}}
                                />
                                <Skeleton height={20} sx={{bgColor: "grey.700"}}/>
                                <hr/>
                                <Skeleton
                                    height={20}
                                    sx={{bgColor: "grey.700", margin: "1rem 0"}}
                                />
                            </div>
                            <div className={style.card}>
                                <Skeleton
                                    variant="rectangular"
                                    width={210}
                                    height={118}
                                    sx={{
                                        bgColor: "grey.700",
                                        margin: "2rem 0",
                                        borderRadius: "10px",
                                    }}
                                />
                                <Skeleton
                                    height={20}
                                    style={{marginBottom: 6}}
                                    sx={{bgColor: "grey.700"}}
                                />
                                <Skeleton height={20} sx={{bgColor: "grey.700"}}/>
                                <hr/>
                                <Skeleton
                                    height={20}
                                    sx={{bgColor: "grey.700", margin: "1rem 0"}}
                                />
                            </div>
                            <div className={style.card}>
                                <Skeleton
                                    variant="rectangular"
                                    width={210}
                                    height={118}
                                    sx={{
                                        bgColor: "grey.700",
                                        margin: "2rem 0",
                                        borderRadius: "10px",
                                    }}
                                />
                                <Skeleton
                                    height={20}
                                    style={{marginBottom: 6}}
                                    sx={{bgcolor: "grey.700"}}
                                />
                                <Skeleton height={20} sx={{bgcolor: "grey.700"}}/>
                                <hr/>
                                <Skeleton
                                    height={20}
                                    sx={{bgcolor: "grey.700", margin: "1rem 0"}}
                                />
                            </div>
                            <div className={style.card}>
                                <Skeleton
                                    variant="rectangular"
                                    width={210}
                                    height={118}
                                    sx={{
                                        bgcolor: "grey.700",
                                        margin: "2rem 0",
                                        borderRadius: "10px",
                                    }}
                                />
                                <Skeleton
                                    height={20}
                                    style={{marginBottom: 6}}
                                    sx={{bgcolor: "grey.700"}}
                                />
                                <Skeleton height={20} sx={{bgcolor: "grey.700"}}/>
                                <hr/>
                                <Skeleton
                                    height={20}
                                    sx={{bgcolor: "grey.700", margin: "1rem 0"}}
                                />
                            </div>
                        </div>
                    )}
                    {}
                </Swiper>
            </div>
        </>
    );
};

export default CarSlider;
