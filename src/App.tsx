import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
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
