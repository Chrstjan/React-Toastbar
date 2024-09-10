import { createContext, useState } from "react";

export const ToastbarContext = createContext();

export const ToastbarContextProvider = ({children}) => {
    const [isShown, setIsShown] = useState(false);

    const showToastbar = () => {
        setIsShown((prev) => !prev);
        console.log("Display hidden:", isShown);
        
    }

    return (
        <ToastbarContext.Provider value={{ isShown, showToastbar }}>
            {children}
        </ToastbarContext.Provider>
    );
};