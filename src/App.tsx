import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

function App() {
  useEffect(() => {
    if (isMobile) {
      // 모바일 장치에서만 동작하도록 설정
      const rootElement = document.getElementById("root") as HTMLElement;
      const bodyElement = document.body as HTMLElement;
      const infoFixElement = document.querySelector(".info-fix") as HTMLElement;

      const adjustHeight = () => {
        const viewportHeight = window.innerHeight;

        if (rootElement) {
          rootElement.style.height = `${viewportHeight}px`;
        }

        if (bodyElement) {
          bodyElement.style.height = `${viewportHeight}px`;
        }

        if (infoFixElement) {
          infoFixElement.style.height = `${viewportHeight - 30}px`;
        }
      };

      // 초기 높이 설정
      adjustHeight();

      // 뷰포트 크기가 변경될 때마다 높이 조정
      window.addEventListener("resize", adjustHeight);

      return () => {
        window.removeEventListener("resize", adjustHeight);
      };
    }
  }, []);

  useEffect(() => {
    const handlePopstate = (event: { state: unknown }) => {
      console.log(event);
      if (event.state) {
        window.close();
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
