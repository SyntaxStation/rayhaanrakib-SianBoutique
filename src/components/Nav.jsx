import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [scrollY, setScrollY] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", isScrollY);

        return () => {
            window.removeEventListener("scroll", isScrollY);
        };
    }, []);
    const isScrollY = () => {
        window.scrollY > 0 ? setScrollY(true) : setScrollY(false)
    }

    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-primaryV " : ""
                }
            >
                home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/shop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primaryV " : ""
                }
            >
                shop
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primaryV " : ""
                }
            >
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/offer"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-primaryV " : ""
                }
            >
                Sale %
            </NavLink>
        </li>
    </>



    return (
        <div>
            <div className={scrollY ? "bg-primary hidden lg:block py-2 opacity-0 transition-all duration-700" : "bg-primary hidden lg:block py-2"}>
                <div className="container mx-auto">
                    <div className='flex justify-between items-center min-h-10 px-6'>
                        <div className='flex items-center w-48 justify-between'>
                            <svg width="17" height="14" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.2273 9.66667V1H1V9.66667H11.2273ZM11.2273 9.66667H16V6.33333L13.9545 4.33333H11.2273V9.66667ZM5.77273 11.3333C5.77273 12.2538 5.00958 13 4.06818 13C3.12679 13 2.36364 12.2538 2.36364 11.3333C2.36364 10.4129 3.12679 9.66667 4.06818 9.66667C5.00958 9.66667 5.77273 10.4129 5.77273 11.3333ZM14.6364 11.3333C14.6364 12.2538 13.8732 13 12.9318 13C11.9904 13 11.2273 12.2538 11.2273 11.3333C11.2273 10.4129 11.9904 9.66667 12.9318 9.66667C13.8732 9.66667 14.6364 10.4129 14.6364 11.3333Z" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <h3 className='font-medium text-sm'>FREE SHIPPING OVER $100</h3>
                        </div>
                        <div className='flex justify-between items-center w-52 font-medium text-sm'>
                            <h3>Shipping</h3>
                            <h3>FAQ</h3>
                            <h3>Contact</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={scrollY ? "bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 right-0  z-50 transition-all duration-700" : "z-50 py-1 bg-white"}>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="drawer z-40">
                            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex flex-col">
                                <div className="w-full navbar">
                                    <div className="flex-none lg:hidden mr-3">
                                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                        </label>
                                    </div>

                                    <a className="w-40"><img src="/Si’an Boutique.png" alt="" /></a>

                                </div>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu flex gap-3 capitalize font-semibold text-primary p-4 w-72 min-h-full bg-secondary pt-10">
                                    {navlinks}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-8 capitalize font-medium leading-4 text-secondary">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <svg aria-hidden="true" role="img" focusable="false" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M21.9353 20.0337L20.7493 8.51772C20.7003 8.0402 20.2981 7.67725 19.8181 7.67725H4.21338C3.73464 7.67725 3.33264 8.03898 3.28239 8.51523L2.06458 20.0368C1.96408 21.0424 2.29928 22.0529 2.98399 22.8097C3.66874 23.566 4.63999 24.0001 5.64897 24.0001H18.3827C19.387 24.0001 20.3492 23.5747 21.0214 22.8322C21.7031 22.081 22.0361 21.0623 21.9353 20.0337ZM19.6348 21.5748C19.3115 21.9312 18.8668 22.1275 18.3827 22.1275H5.6493C5.16836 22.1275 4.70303 21.9181 4.37252 21.553C4.042 21.1878 3.88005 20.7031 3.92749 20.2284L5.056 9.55014H18.9732L20.0724 20.2216C20.1223 20.7281 19.9666 21.2087 19.6348 21.5748Z" fill="currentColor"></path> <path d="M12.1717 0C9.21181 0 6.80365 2.40811 6.80365 5.36803V8.6138H8.67622V5.36803C8.67622 3.44053 10.2442 1.87256 12.1717 1.87256C14.0992 1.87256 15.6674 3.44053 15.6674 5.36803V8.6138H17.5397V5.36803C17.5397 2.40811 15.1316 0 12.1717 0Z" fill="currentColor"></path> </svg>
                        </button>
                        <button className="btn btn-ghost btn-circle" onClick={() => document.getElementById('my_modal_3').showModal()}><svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div>
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div >

    );
};


export default Nav;