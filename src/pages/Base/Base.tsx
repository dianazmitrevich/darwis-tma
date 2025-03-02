import { Outlet } from "react-router";
import style from "./Base.module.scss";

export const Base = () => {
    return (
        <div className={style.container}>
            <div className={style.body}>
                <Outlet />
            </div>
        </div>
    );
};
