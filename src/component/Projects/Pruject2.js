import React from 'react';
import pic1 from '../../assest/Screenshot (468).png'
import pic2 from '../../assest/Screenshot (469).png'
import pic3 from '../../assest/Screenshot (470).png'
const Pruject2 = () => {
    return (
        <section>
            <h3 className='text-3xl mt-10 font-montserrat text-black'>Project <span className='text-indigo-800'> Details</span></h3>
            <div className='grid sm:grid-cols-3 gap-3 mx-10 mt-10 mb-20 font-montserrat'>
                {/* 1s */}
                <div className="max-w-xs rounded-md shadow-md font-montserrat bg-white text-black">
                    <img src={pic1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl text-indigo-800 font-semibold tracking-wide">Categories Section</h2>
                            <p className="text-black">There are three categories here, the user can choose the service of his choice from here</p>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                    <img src={pic2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl text-indigo-800 font-semibold tracking-wide">Appointment Section</h2>
                            <p className="text-black">User can appoint for their service at suitable time from this website.</p>
                        </div>
                    </div>
                </div>
                {/*  3*/}
                <div className="max-w-xs rounded-md shadow-md bg-white text-black">
                    <img src={pic3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl text-indigo-800 font-semibold tracking-wide">Log In Section</h2>
                            <p className="text-black">You must login to receive the service, otherwise you will not be able to receive any service, so you can receive the service by logging in from this section.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pruject2;