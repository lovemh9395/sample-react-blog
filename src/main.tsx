import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Mobile, PC } from "./utils/MobileCheck.tsx";

export const AppEntry = () => {
  return (
    <div>
      <PC>
        <h1>PC 모드에서만 보이는 내용</h1>
      </PC>
      <Mobile>
        <h1>모바일 모드에서만 보이는 내용</h1>
      </Mobile>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppEntry />
  </StrictMode>
);
