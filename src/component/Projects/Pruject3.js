import React from 'react';
import pic1 from '../../assest/Screenshot (414).png'
import pic2 from '../../assest/Screenshot (415).png'
import pic3 from '../../assest/Screenshot (416).png'
const Pruject3 = () => {
    return (
        <section>
        <h3 className='text-3xl mt-10 font-montserrat text-black'>Project <span className='text-[#146C94]'> Details</span></h3>
        <div className='grid sm:grid-cols-3 gap-3 mx-10 mt-10 mb-20 font-montserrat'>
            {/* 1s */}
            <div className="max-w-xs rounded-md shadow-md font-montserrat bg-white text-black">
                <img src={pic1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-[#146C94] font-semibold tracking-wide">Categories</h2>
                        <p className="text-black">Three Types of food categories items in this website.You can choose you favorite one..</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={pic2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-[#146C94] font-semibold tracking-wide">Review Section</h2>
                        <p className="text-black">Here customer can give there opinion.</p>
                    </div>
                </div>
            </div>
            {/*  3*/}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={pic3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-[#146C94] font-semibold tracking-wide">Dashboard</h2>
                        <p className="text-black">Only admin can see this route.Admin can see this route user, order list and add new items.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pruject3;