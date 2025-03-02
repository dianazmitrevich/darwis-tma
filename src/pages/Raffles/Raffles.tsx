import { GobletSvg } from "../../assets/svg/GobletSvg";
import style from "./Raffles.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRaffleState } from "../../store/selectors/getRaffleState";
import { setRafflesState } from "../../store/slices/rafflesStateSlice";
import { RaffleItem } from "../../components/RaffleItem/RaffleItem";
import { CircleTimeSvg } from "../../assets/svg/CircleTimeSvg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "../../styles/swiper.scss";
import { CircleGiftSvg } from "../../assets/svg/CircleGiftSvg";

export const Raffles = () => {
    const dispatch = useDispatch();
    const switchState = useSelector(getRaffleState);

    const handleSetRafflesActive = () => {
        dispatch(setRafflesState("active"));
    };

    const handleSetRafflesCompleted = () => {
        dispatch(setRafflesState("completed"));
    };

    return (
        <>
            <div className={style.title_wrap}>
                <GobletSvg />
                <h2>Ваши розыгрыши</h2>
            </div>
            <div className={style.switch}>
                <div className={style.wrap}>
                    <button
                        data-active={switchState === "active"}
                        className={style.button}
                        onClick={handleSetRafflesActive}>
                        Активные
                    </button>
                    <button
                        data-active={switchState === "completed"}
                        className={style.button}
                        onClick={handleSetRafflesCompleted}>
                        Завершенные
                    </button>
                </div>
            </div>
            <div className={style.last_raffle}>
                <h3>Последний розыгрыш</h3>
                <RaffleItem isTransparent={true} />
            </div>
            <div className={style.white_bg}>
                <div className={style.section_title}>
                    <CircleTimeSvg />
                    <div className={style.text}>Скоро закончится!</div>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.2}
                    slidesOffsetBefore={24}
                    slidesOffsetAfter={24}
                    className={style.custom_swiper}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}>
                    <SwiperSlide>
                        <RaffleItem isDetailed={true} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RaffleItem isDetailed={true} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RaffleItem isDetailed={true} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <RaffleItem isDetailed={true} />
                    </SwiperSlide>
                </Swiper>
                <div className={style.section_title} style={{ marginTop: "30px" }}>
                    <CircleGiftSvg />
                    <div className={style.text}>Все</div>
                </div>
                <div className={style.gap15}>
                    <RaffleItem isDetailed={true} />
                    <RaffleItem isDetailed={true} />
                    <RaffleItem isDetailed={true} />
                </div>
            </div>
        </>
    );
};
