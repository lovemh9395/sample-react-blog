import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import {
  AppTopComponent,
  MainComponent,
  SidebarLeft,
  SidebarRight,
  TopComponent,
} from "./components/index.ts";
import "./index.css";
import { Mobile, PC } from "./utils/MobileCheck.tsx";

export const AppEntry = () => {
  // 좌측,우측이 최상단부터 시작하는 구조
  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       width: "100%",
  //       flexDirection: "row",
  //     }}
  //   >
  //     <PC>
  //       <SidebarLeft />
  //     </PC>
  //     <div style={{ width: "100%" }}>
  //       <PC>
  //         <TopComponent />
  //       </PC>
  //       <Mobile>
  //         <AppTopComponent />
  //       </Mobile>
  //       <MainComponent />
  //     </div>
  //     <PC>
  //       <SidebarRight />
  //     </PC>
  //   </div>
  // );

  // 상단 component의 좌,우를 최대로 키우고 바로 밑으로 좌측,메인,우측으로 나누는 구조
  return (
    <BrowserRouter>
      <div
        style={{
          width: "100%",
        }}
      >
        <PC>
          <TopComponent />
        </PC>
        <Mobile>
          <AppTopComponent />
        </Mobile>
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <PC>
            <SidebarLeft />
          </PC>
          <MainComponent />
          <PC>
            <SidebarRight />
          </PC>
        </div>
      </div>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppEntry />
  </StrictMode>
);
