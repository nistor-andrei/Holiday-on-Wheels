import {FC, useState} from "react";
import style from "./header.module.css";
import {SearchCar} from "../SearchCar";
import {randomVideos} from "../../../../utils/randomVideos";

const Header: FC = () => {
    const {amg, bmw} = randomVideos();
    const [videoSource, setVideoSource] = useState(bmw);

    function handleBack() {
        setVideoSource(bmw);
    }

    function handleForward() {
        setVideoSource(amg);
    }

    return (
        <header className={style.header}>
            <div className={style.layout}>
                <div className={style.textBox}>
                    <div className={style.text}>
                        <h1>
                            Choose the <span>right car</span> for you here in the
                            fewest possible steps
                        </h1>
                        <p>
                            We offer a large number of cars,different classes and
                            for any of you needs, business,romantic,and family trip
                        </p>
                        <SearchCar/>
                    </div>
                    <div className={style.carController}>
                        <h2>{videoSource.title}</h2>
                        <p>{videoSource.description}</p>
                        <a href="/">Rent now</a>
                        <div className={style.buttons}>
                            <button onClick={handleBack}>&lt;</button>
                            <button onClick={handleForward}>&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
            <video
                className={style.video}
                autoPlay
                height={840}
                muted
                loop
                src={videoSource.video}
            />
        </header>
    );
};

export default Header;
