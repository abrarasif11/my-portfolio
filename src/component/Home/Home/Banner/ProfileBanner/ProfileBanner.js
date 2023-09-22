import React from 'react';
import profile from '../../../../../assest/Portfolio Banner MERN.gif'
const ProfileBanner = () => {
    return (
        <div>
            <img className='w-full' src={profile} alt="" />
            <div className=' mt-10 font-montserrat mb-20'>
                <a target='_blank'  href="https://drive.google.com/file/d/165WyaSDEU9IgpdNcVT0GvnvYcgtNniB5/view?usp=drive_link"><button className=' text-white px-2 py-2 rounded-lg font-me bg-[#146C94] hover:bg-[#4682A9]'>Download Resume</button></a>
            </div>
        </div>
    );
};

export default ProfileBanner;