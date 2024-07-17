import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopstate = (event: PopStateEvent) => {
      if (event.state) {
        if (window.confirm("이 페이지를 떠나시겠습니까?")) {
          window.opener = null;
          window.open("", "_self");
          window.close();
        } else {
          navigate(1); // 뒤로가기 동작 취소
        }
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [navigate]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
