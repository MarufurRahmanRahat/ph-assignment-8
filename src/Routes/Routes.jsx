import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import Error from "../Pages/Error";
import Installation from "../Pages/Installation";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/apps',
    element: <Apps />,
  },
  {
    path: '/app-details',
    element: <AppDetails />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/installation',
    element: <Installation />,
  },
])

export default router;