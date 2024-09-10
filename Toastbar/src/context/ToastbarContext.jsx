import { createContext, useEffect, useState } from "react";

export const ToastbarContext = createContext();

export const ToastbarContextProvider = ({children}) => {
    const [isShown, setIsShown] = useState(false);
    const [toastType, setToastType] = useState("");

    let time = 1;
    const showToastbar = (type) => {
        setIsShown(true);
        setToastType(type);
    }

    useEffect(() => {
        time = setTimeout(() => {
            setIsShown(false);
        }, 2500);

        return () => {
            clearTimeout(time);
        }
    }, [isShown])

    return (
        <ToastbarContext.Provider value={{ isShown, showToastbar, toastType }}>
            {children}
        </ToastbarContext.Provider>
    );
};