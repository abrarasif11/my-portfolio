import React from 'react';
import profile from '../../../../../assest/My Animated Banner (1).gif'
const ProfileBanner = () => {
    return (
        <div>
            <img className='w-full' src={profile} alt="" />
            <div>
                <a href="https://drive.google.com/file/d/16Bx0B_Ac10n-6jCWIJrozbt_e3MfjEPn/view?usp=sharing"><button className='font-me bg-indigo-800'>Download Resume</button></a>
            </div>
        </div>
    );
};

export default ProfileBanner;