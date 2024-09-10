import style from "./Toastbar.module.scss";

export const Toastbar = ({text = "success", type = "success"}) => {
    return (
        <>
            <span className={`${style.toastbarStyling} ${style[type]}`}>
                {text == "" ? "Success" : text}
            </span>
        </>
    )
}