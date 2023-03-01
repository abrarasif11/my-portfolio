import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../assest/Screenshot (389).png'
import project2 from '../../assest/Screenshot (394).png'
import project3 from '../../assest/Screenshot (413).png'

const Pruject = () => {
    return (
        <section className='mx-auto'>
            <h3 className='text-3xl mt-10 font-montserrat text-black'>My <span className='text-indigo-800'> Projects</span></h3>
        <div className='grid sm:grid-cols-3 gap-3 mx-10 mt-10 mb-20 font-montserrat'>
            {/* 1s */}
            <div className="max-w-xs rounded-md shadow-md font-montserrat bg-white text-black">
                <img src={project1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Goriber Seller</h2>
                        <p className="text-black">Resale Products sell Website</p>
                    </div>
                    <Link to='/projects1'>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-800 text-white">See Details</button>
                    </Link>
                    <a target='_blank' href="https://goriber-seller.netlify.app/">
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-800 text-white">Live Link</button>
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
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-800 text-white">See Details</button>
                    </Link>
                    <a target='_blank' href="https://javabakeryshop.netlify.app/">
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-800 text-white">Live Link</button>
                    </a>
                </div>
            </div>
            {/*  3*/}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={project2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">MR. Travel Guider</h2>
                        <p className="text-black">Tourist Guider Website</p>
                    </div>
                    <Link to='/projects2'>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-800 text-white">See Details</button>
                    </Link>
                    <a target='_blank' href="https://radiant-brigadeiros-f0fd38.netlify.app/">
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-800 text-white">Live Link</button>
                    </a>
                </div>
            </div>
          
        </div>
        </section>
    );
};

export default Pruject;