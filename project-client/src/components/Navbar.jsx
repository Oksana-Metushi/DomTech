import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import img from "../assets/fav_icon.png"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    }, [])

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About Us", path: "/aboutus" },
        { link: "Contact Us", path: "/contactus" },
    ]

    return (
        <header className='w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50 glass'>
            <nav className={` xl:px-24 px-4 ${isSticky
                ? "bg-black transition-all duration-300 ease-in-out"
                : ""
                }`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <Link to="/" className='text-blue w-10'> <img src={img} alt="" /></Link>

                    <div className="form-control lg:block hidden">
                        <input type="text" placeholder="Search" className="input-bordered p-2 outline-none rounded-md" />
                    </div>

                    <div className='space-x-2 flex items-center'>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://static.vecteezy.com/system/resources/previews/014/396/452/non_2x/comic-style-user-icon-with-transparent-background-file-png.png" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                <li><a>Login</a></li>
                                <li><a>Signup</a></li>
                            </ul>
                        </div>

                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className=""><FaBars /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full glass text-base-content">
                                    <li>{
                                        navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase '>{link}</Link>)
                                    }</li>
                                    <li>
                                        <div className="form-control lg:hidden block">
                                        <input type="text" placeholder="Search" className="input-bordered p-2 outline-none rounded-md" />
                                    </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
