import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import Error from "../Pages/Error";
import Installation from "../Pages/Installation";
import ErrorAppNotFound from "../Pages/ErrorAppNotFound";
import MainLayout from "../Layouts/MainLayout";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('./Card.json')
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
                path: '/error-app-not-found',
                element: <ErrorAppNotFound />,
            },
            {
                path: '/installation',
                element: <Installation />,
            },
        ]
    },


])

export default router;