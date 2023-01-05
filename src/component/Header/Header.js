import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div class="bg-white font-montserrat ">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                        <span class="ml-2 text-xl font-bold tracking-wide px-2 py-2 hover:bg-indigo-700 hover:text-white text-indigo-800 uppercase">
                            Portfolio
                        </span>
                    </Link>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to='/aboutMe'
                                class="font-medium tracking-wide text-indigo-800 px-2 py-2 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/skill'
                                class="font-medium tracking-wide px-2 py-2 text-indigo-800 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/projects'
                                class="font-medium tracking-wide text-indigo-800 px-2 py-2 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/contactMe'
                                class="font-medium tracking-wide px-2 py-2 text-indigo-800 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/blogs'
                                class="font-medium tracking-wide px-2 py-2 text-indigo-800 hover:bg-indigo-700 hover:text-white transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-indigo-800 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-indigo-700 hover:text-white focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                            >
                                Hire Me
                            </Link>
                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-indigo-800" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"

                                                class="inline-flex items-center"
                                            >
                                                <img className='w-[70px]' src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/c6267a8feb3cbb78ebb0f5a374b21613/226f16cb-5718-4fa6-8051-6e1e998482ff_rwc_0x0x3008x1807x3008.png?h=da9839d4a497954726a2c464dbf61479" alt="" />
                                                <span class="ml-2 text-xl font-bold tracking-wide text-indigo-800 uppercase">
                                                    Portfolio
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-indigo-600 bg-indigo-700 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-black" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <Link
                                                    to='/aboutMe'
                                                    class="font-medium tracking-wide text-indigo-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/skill'
                                                    class="font-medium tracking-wide text-indigo-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Skills
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/projects'
                                                    class="font-medium tracking-wide text-indigo-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Projects
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/contactMe'
                                                    class="font-medium tracking-wide text-indigo-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Contact
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/blogs'
                                                    class="font-medium tracking-wide text-indigo-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    class="inline-flex items-center justify-center w-1/2 h-12 px-6 font-medium tracking-wide text-indigo-800 transition duration-200 rounded shadow-md hover:bg-indigo-700 hover:text-white focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    Hire Me
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;