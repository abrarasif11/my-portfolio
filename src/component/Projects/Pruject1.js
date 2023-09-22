import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../assest/548.png'
import pic2 from '../../assest/Screenshot (527).png'
import pic3 from '../../assest/Screenshot (544).png'
const Pruject1 = () => {
    return (
        <section>
            <h3 className='text-3xl mt-10 font-montserrat text-black'>Projects<span className='text-[#146C94]'> Details</span></h3>
        <div className='grid sm:grid-cols-3 gap-3 mx-10 mt-10 mb-20 font-montserrat'>
            {/* 1s */}
            <div className="max-w-xs rounded-md shadow-md font-montserrat bg-white text-black">
                <img src={pic1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-[#146C94] font-semibold tracking-wide">Movies Details Section</h2>
                        <p className="text-black">In this section you can see movies or tv shows full details like release date, top casting and also watching trailer etc...</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={pic2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-[#146C94] font-semibold tracking-wide">Trending Section</h2>
                        <p className="text-black">You can see all trending movies and tv shows in this section</p>
                    </div>
                   
                </div>
            </div>
            {/*  3*/}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={pic3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-[#146C94] font-semibold tracking-wide">Explore Section</h2>
                        <p className="text-black">Users can choose their movies or tv shows category wise from this page</p>
                    </div>
                   
                </div>
            </div>
        </div>
        </section>
    );
};

export default Pruject1;