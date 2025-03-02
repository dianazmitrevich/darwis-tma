import style from "./RaffleItem.module.scss";
import { VerifiedSvg } from "../../assets/svg/VerifiedSvg";
import { ArrowRightSvg } from "../../assets/svg/ArrowRightSvg";
import { ClockSvg } from "../../assets/svg/ClockSvg";
import { RefreshSmallSvg } from "../../assets/svg/RefreshSmallSvg";

interface ComponentProps {
    isPink?: boolean;
    isTransparent?: boolean;
    isDetailed?: boolean;
}

export const RaffleItem = ({ isPink, isTransparent, isDetailed }: ComponentProps) => {
    return (
        <>
            <div
                className={`${style.raffle_item} ${isPink ? style.pink : ""} ${
                    isTransparent ? style.transparent : ""
                }`}>
                <div className={style.wrap}>
                    <div className={style.img}>
                        {isDetailed && (
                            <div className={style.tries_left}>
                                <RefreshSmallSvg />
                                <span>2</span>
                            </div>
                        )}
                    </div>
                    <div className={style.text_wrap}>
                        <div className={style.channel_name}>
                            <span>Лошадь анархиста</span>
                            <VerifiedSvg />
                        </div>
                        <div className={style.raffle_name}>Выиграй поездку в ад</div>
                    </div>
                    <div className={style.raffle_btn}>
                        <ArrowRightSvg />
                    </div>
                    {isDetailed && (
                        <div className={style.time_left}>
                            <ClockSvg />
                            <span>12 дней</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
