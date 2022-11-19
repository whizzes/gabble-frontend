import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Index } from "./views/index";
import { LoginView } from "./views/login";
import { Signup } from "./views/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <LoginView />,
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
