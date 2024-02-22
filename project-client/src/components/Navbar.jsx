import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
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
        { link: "About", path: "/" },

    ]

    return (
        <header className='w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-30 glass'>
            <nav className="py-4 lg:px-24 px-4">
                <div className='flex justify-between items-center text-base gap-8'>
                    <Link to="/" className='text-blue'> Logo</Link>

                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                                    <div className=''>
                                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                                            {
                                                isMenuOpen ? "": <FaBars className='w- h-5 text-black' />
                                            }
                                        </button>
                                    </div>
                                </label>
                            </div>
                            <div className="drawer-side" >
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <div className="menu p-4 w-80 min-h-full bg-blue text-base-content">
                                    <div className='flex justify-between pr-4 text-2xl'>
                                        <h1>Menu</h1>
                                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                                            {
                                                !isMenuOpen ? <FaXmark className='w- h-5 text-black' /> : ""
                                            }
                                        </button>
                                    </div>
                                    {
                                        navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base
                                         text-white uppercase '>{link}</Link>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar