import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../pages/home/Home';
import Register from '../pages/home/register/Register';
import LogIn from '../pages/home/register/LogIn';
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
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
]);

export default Router
