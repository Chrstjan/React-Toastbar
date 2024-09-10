import style from "./Toastbar.module.scss";

export const Toastbar = ({text}) => {
    return (
        <>
            <span className={style.toastbarStyling}>
                {text}
            </span>
        </>
    )
}