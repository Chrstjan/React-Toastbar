import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { useContext } from "react";
import { ToastbarContext } from "./context/ToastbarContext";
import { Wrapper } from "./components/Wrapper/Wrapper";
import "./App.scss";
import { Toastbar } from "./components/Toastbar/Toastbar";

function App() {
  const { showToastbar, isShown } = useContext(ToastbarContext);

  return (
    <>
      <h1>React Toastbar</h1>
      <button onClick={() => showToastbar()}>Show Toastbar</button>
      <Wrapper>
        {isShown ? <Toastbar text="Hello"/> : null}
      </Wrapper>
    </>
  );
}

export default App;
