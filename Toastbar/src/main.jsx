import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastbarContextProvider } from "./context/ToastbarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastbarContextProvider>
      <App />
    </ToastbarContextProvider>
  </StrictMode>
);
