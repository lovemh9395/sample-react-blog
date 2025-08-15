import { type ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

export function Mobile({ children }: { children: ReactElement }) {
  // PC모드 상태 가져오기 (전역 or props로 받을 수 있음)
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  // PC모드면 모바일 화면 숨김
  return <>{isMobile && children}</>;
}

export function PC({ children }: { children: ReactElement }) {
  const isPc = useMediaQuery({ query: "(min-width:769px)" });

  // PC모드면 강제로 PC 화면 보여줌
  return <>{isPc && children}</>;
}
