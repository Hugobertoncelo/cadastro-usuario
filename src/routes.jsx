import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Lista-de-Usuários",
    element: <ListUsers />,
  },
]);
export default function Routes() {
  return <RouterProvider router={router} />;
}
