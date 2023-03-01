import React from 'react';
import logo1 from '../../assest/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png'
import logo2 from '../../assest/MongoDB_logo_01.png'
import logo3 from '../../assest/node-js-logo.png'
import logo4 from '../../assest/1611079.png'
import logo5 from '../../assest/firebase-logo-png-firebase-logo-png-transparent-amp-svg-vector-pluspng-2400x3291.png'
import logo6 from '../../assest/nodejs-logo-FBE122E377-seeklogo.com.png'
import logo7 from '../../assest/HTML5_badge.png'
import logo8 from '../../assest/css3_badge.png'
import logo9 from '../../assest/express-js-png-5.png'
const Skill = () => {

  return (
    <div className="px-4 py-16 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative  font-montserrat">My <span className='text-indigo-800'> Skills</span> On</span>
          </span>{' '}
        </h2>
      </div>
      <div className="grid grid-cols-2 mt-20 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-12 hover:scale-105 transition-all duration-900' src={logo1} alt="" />
        </div>
        <div className="flex hover:scale-105 transition-all duration-900 items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-12' src={logo2} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-12' src={logo3} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-16' src={logo4} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-12' src={logo5} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-12' src={logo6} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-12' src={logo7} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-12' src={logo8} alt="" />
        </div>
        <div className="flex items-center hover:scale-105 transition-all duration-900 justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
          <img className='w-12' src={logo9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skill;