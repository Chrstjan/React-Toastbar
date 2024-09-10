import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { useContext, useState } from "react";
import { ToastbarContext } from "./context/ToastbarContext";
import { Wrapper } from "./components/Wrapper/Wrapper";
import "./App.scss";
import { Toastbar } from "./components/Toastbar/Toastbar";

function App() {
  const { showToastbar, isShown, toastType } = useContext(ToastbarContext);

  return (
    <>
      <h1>React Toastbar</h1>
      <button onClick={() => showToastbar("success")}>Success Toastbar</button>
      <button onClick={() => showToastbar("warning")}>Warning Toastbar</button>
      <button onClick={() => showToastbar("error")}>Error Toastbar</button>
      <Wrapper>
        {isShown ? <Toastbar text={toastType} type={toastType}/> : null}
      </Wrapper>
    </>
  );
}

export default App;
