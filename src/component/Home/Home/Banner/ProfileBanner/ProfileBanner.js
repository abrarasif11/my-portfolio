import React from 'react';
import profile from '../../../../../assest/My  Banner.gif'
const ProfileBanner = () => {
    return (
        <div>
            <img className='w-full' src={profile} alt="" />
            <div className=' mt-10 font-montserrat mb-20'>
                <a target='_blank' href="https://drive.google.com/file/d/16Bx0B_Ac10n-6jCWIJrozbt_e3MfjEPn/view?usp=sharing"><button className=' text-white px-2 py-2 rounded-lg font-me bg-indigo-600'>Download Resume</button></a>
            </div>
        </div>
    );
};

export default ProfileBanner;