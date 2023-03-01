import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

    const menuItems = (
        <React.Fragment>
            <li>
                <Link
                    to='/aboutMe'
                    class="font-medium font-montserrat tracking-wide text-indigo-800 px-2 py-2 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    to='/skill'
                    class="font-medium font-montserrat tracking-wide px-2 py-2 text-indigo-800 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    to='/projects'
                    class="font-medium font-montserrat tracking-wide text-indigo-800 px-2 py-2 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to='/contactMe'
                    class="font-medium font-montserrat tracking-wide px-2 py-2 text-indigo-800 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                >
                    Contact
                </Link>
            </li>
            <li>
                <Link
                    to='/blogs'
                    class="font-medium font-montserrat tracking-wide px-2 py-2 text-indigo-800 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                >
                    Blogs
                </Link>
            </li>
            <li>
                <a target='_blank' className="inline-flex items-center font-montserrat justify-center h-12 px-6 font-medium tracking-wide text-indigo-800 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-indigo-700 hover:text-white focus:shadow-outline focus:outline-none" href="https://www.linkedin.com/in/fahim-abrar-asif-2601a6244/
                                ">
                    Hire Me
                </a>
            </li>
        </React.Fragment>
    );

    return (
        <div className="navbar bg-white flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn text-indigo-800 btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={1}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <div className="flex  items-center">

                    <Link
                        to="/"
                        className="btn btn-ghost text-indigo-800 font-montserrat normal-case font-poppins font-semibold  text-2xl"
                    >
                       Fahim Abrar Asif
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
        </div>
    );
};

export default Header;