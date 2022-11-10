import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Index } from "./views/index";
import { Login } from "./views/login";
import { Signup } from "./views/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
