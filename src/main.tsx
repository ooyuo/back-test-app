import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageA from "./components/PageA.tsx";
import PageB from "./components/PageB.tsx";
import PageC from "./components/PageC.tsx";
import PageD from "./components/PageD.tsx";
import PageE from "./components/PageE.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "a", element: <PageA /> },
      { path: "b", element: <PageB /> },
      { path: "c", element: <PageC /> },
      { path: "d", element: <PageD /> },
      { path: "e", element: <PageE /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
