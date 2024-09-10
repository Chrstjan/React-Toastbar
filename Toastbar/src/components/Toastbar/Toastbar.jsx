import style from "./Toastbar.module.scss";

export const Toastbar = ({text, type = "success"}) => {
    return (
        <>
            <span className={`${style.toastbarStyling} ${style[type]}`}>
                {text}
            </span>
        </>
    )
}