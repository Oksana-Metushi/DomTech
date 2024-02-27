import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Register from '../pages/home/register/Register';
import LogIn from '../pages/home/register/LogIn';

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
            },
            {
                      path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            }
        ]
    },
]);

export default Router
