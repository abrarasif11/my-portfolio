import React from 'react';
import pic1 from '../../assest/Screenshot (399).png'
import pic2 from '../../assest/Screenshot (400).png'
import pic3 from '../../assest/Screenshot (401).png'
const Pruject3 = () => {
    return (
        <section>
        <h3 className='text-3xl mt-10 font-montserrat text-black'>Project <span className='text-indigo-800'> Details</span></h3>
        <div className='grid sm:grid-cols-3 gap-3 ml-20 mt-10 mb-20 font-montserrat'>
            {/* 1s */}
            <div className="max-w-xs rounded-md shadow-md font-montserrat bg-white text-black">
                <img src={pic1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-indigo-800 font-semibold tracking-wide">Course Section</h2>
                        <p className="text-black">Here our online courses are shown, user can choose the course according to his choice</p>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                <img src={pic2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-indigo-800 font-semibold tracking-wide">FAQ Section</h2>
                        <p className="text-black">Here some details have been discussed so that one can know about the course well</p>
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

export default Pruject3;