import style from "./ChannelCap.module.scss";

export const ChannelCap = () => {
    return (
        <>
            <div className={style.channel}>
                <div className={style.desc}>Призы предоставляет</div>
                <div className={style.img}></div>
                <div className={style.name}>Название канала</div>
                <div className={style.username}>@tttttttt</div>
            </div>
        </>
    );
};
