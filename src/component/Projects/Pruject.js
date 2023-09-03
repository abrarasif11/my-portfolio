import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../assest/Screenshot (483).png'
import project2 from '../../assest/Screenshot (467).png'
import project3 from '../../assest/Screenshot (413).png'

const Pruject = () => {
    return (
        <section className='mx-auto'>
            <h3 className='text-3xl mt-10 font-montserrat text-black'>My <span className='text-[#146C94]'> Projects</span></h3>
        <div className='grid sm:grid-cols-3 gap-3 mx-10 mt-10 mb-20 font-montserrat'>
            {/* 1s */}
            <div className="max-w-xs rounded-md shadow-md font-montserrat bg-white text-black">
                <img src={project1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Yenn Cart</h2>
                        <p className="text-black">Full Stack E-Commerce Shoe Store Website</p>
                    </div>
                    <Link to='/projects1'>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#146C94] hover:bg-[#4682A9] text-white">See Details</button>
                    </Link>
                    <a target='_blank' href="https://yenn-cart.vercel.app/">
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#146C94] hover:bg-[#4682A9] text-white">Live Link</button>
                    </a>
                </div>
            </div>
            {/* 2 */}
              <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={project3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Java Bakery Shop</h2>
                        <p className="text-black">Online Food Ordering Website</p>
                    </div>
                    <Link to='/projects3'>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#146C94] hover:bg-[#4682A9] text-white">See Details</button>
                    </Link>
                    <a target='_blank' href="https://javabakeryshop.netlify.app/">
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#146C94] hover:bg-[#4682A9] text-white">Live Link</button>
                    </a>
                </div>
            </div>
            {/*  3*/}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={project2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Smooth Styling</h2>
                        <p className="text-black">Online Gents Parlour Website</p>
                    </div>
                    <Link to='/projects2'>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#146C94] hover:bg-[#4682A9] text-white">See Details</button>
                    </Link>
                    <a target='_blank' href="https://smooth-styling.netlify.app/">
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#146C94] hover:bg-[#4682A9] text-white">Live Link</button>
                    </a>
                </div>
            </div>
          
        </div>
        </section>
    );
};

export default Pruject;