import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../assest/Screenshot (391).png'
import pic2 from '../../assest/Screenshot (392).png'
import pic3 from '../../assest/Screenshot (393).png'
const Pruject1 = () => {
    return (
        <section>
            <h3 className='text-3xl mt-10 font-montserrat text-black'>Projects<span className='text-indigo-800'> Details</span></h3>
        <div className='grid sm:grid-cols-3 gap-3 mx-10 mt-10 mb-20 font-montserrat'>
            {/* 1s */}
            <div className="max-w-xs rounded-md shadow-md font-montserrat bg-white text-black">
                <img src={pic1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-indigo-800 font-semibold tracking-wide">Order Section</h2>
                        <p className="text-black">In this section you can see the products from there you can buy the product of your choice</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={pic2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-indigo-800 font-semibold tracking-wide">Admin Dashboard</h2>
                        <p className="text-black">In this section, the admin can see how many users have logged into his website and which products have been purchased by his users</p>
                    </div>
                   
                </div>
            </div>
            {/*  3*/}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={pic3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-indigo-800 font-semibold tracking-wide">Question Section</h2>
                        <p className="text-black">You can see on this website is question answer section where answers of four question are given</p>
                    </div>
                   
                </div>
            </div>
        </div>
        </section>
    );
};

export default Pruject1;