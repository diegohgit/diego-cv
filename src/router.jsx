import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Experience from "./views/Experience"
import Portfolio from "./views/Portfolio"

const basename = import.meta.env.VITE_BASE_PATH.replace(/\/$/, '')

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/experience',
                element: <Experience />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
        ]
    }
], {basename})