import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Experience from "./views/Experience"
import Portfolio from "./views/Portfolio"

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
], {
    // This is useful so this react project can be used as
    // www.example.com/class-scheduler-daniel
    basename: "/class-scheduler-daniel" 
})