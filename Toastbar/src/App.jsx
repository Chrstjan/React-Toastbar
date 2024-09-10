import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { useContext, useState } from "react";
import { ToastbarContext } from "./context/ToastbarContext";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Toastbar } from "./components/Toastbar/Toastbar";
import "./App.scss";

function App() {
  const { showToastbar, isShown, toastType } = useContext(ToastbarContext);
  const [toastMessage, setToastMessage] = useState("");

  const handleMessage = (e) => {
    setToastMessage(e.target.value);
  }

  return (
    <>
      <h1>React Toastbar</h1>
      <label htmlFor="toast">Enter your toast message</label>
      <input onChange={(e) => handleMessage(e)} type="text" name="toast"/>
      <button onClick={() => showToastbar("success")}>Success Toastbar</button>
      <button onClick={() => showToastbar("warning")}>Warning Toastbar</button>
      <button onClick={() => showToastbar("error")}>Error Toastbar</button>
      <Wrapper>
        {isShown ? <Toastbar text={toastMessage} type={toastType}/> : null}
      </Wrapper>
    </>
  );
}

export default App;
