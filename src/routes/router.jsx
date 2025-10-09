import App from "../App";
import { createBrowserRouter } from "react-router";
import Example from "../pages/Example";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/example",
    element: <Example />,
  },
]);
