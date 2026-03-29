import { createBrowserRouter } from "react-router";
import { HomeSwiss } from "./pages/HomeSwiss";
import { Categories } from "./pages/Categories";
import { WorkDetail } from "./pages/WorkDetail";
import { About } from "./pages/About";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeSwiss />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "work/:id",
        element: <WorkDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);