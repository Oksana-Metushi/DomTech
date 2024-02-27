import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/aboutus",
                element: <About/>
            },
            {
                path: "/contactus",
                element: <Contact/>
            }
        ]
    },
]);

export default Router