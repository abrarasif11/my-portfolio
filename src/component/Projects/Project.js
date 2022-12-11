// import React from 'react';
// import { useParams } from 'react-router-dom';
// import img1 from '../../assest/Screenshot (381).png'
// import img2 from '../../assest/Screenshot (380).png'
// import img3 from '../../assest/Screenshot (382).png'
// import img5 from '../../assest/Screenshot (384).png'
// import img6 from '../../assest/Screenshot (383).png'
// import img7 from '../../assest/Screenshot (385).png'
// import img8 from '../../assest/Screenshot (386).png'
// import img9 from '../../assest/Screenshot (387).png'
// import img10 from '../../assest/Screenshot (388).png'



// const Project = () => {

//     const { index } = useParams()

//     const projects = [
//         {
//             index: 1,
//             name: 'Swap',
//             type: 'Resell Website of Mobile Phone',
//             stack: 'Full Stack',
//             description: 'A full-stack project with a user login system enabled with firebase, Moreover, the frontend is bootstrapped with React and the backend server is created using node and express with the cloud database system MongoDB. The website has its admin panel and fully-secured user authorization system using a JWT token.',
//             screenshot: [img1, img5, img6]
//         },
//         {
//             index: 2,
//             name: 'Take A Trip',
//             type: 'Travel Website',
//             stack: 'Responsive',
//             description: 'A full stack project of Travel Website created using MERN stack. Click below to learn more about the website.',
//             screenshot: [img2, img7, img8]
//         },
//         {
//             index: 3,
//             name: 'Learning Mates',
//             type: 'Learning Platform Website',
//             stack: 'Front end',
//             description: 'A front project for Learning Different Courses created using React. Click below to learn more about the website.',
//             screenshot: [img3, img9, img10]
//         },

//     ]
//     const details = projects.find(p => p.index === parseInt(index))
//     console.log(details, index);

//     return (
//         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//             <div className="grid gap-10 lg:grid-cols-2">
//                 <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
//                     <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
//                         <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
//                             <polyline
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeMiterlimit="10"
//                                 points=" 8,5 8,1 16,1 16,5"
//                                 strokeLinejoin="round"
//                             />
//                             <polyline
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeMiterlimit="10"
//                                 points="9,15 1,15 1,5 23,5 23,15 15,15"
//                                 strokeLinejoin="round"
//                             />
//                             <polyline
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeMiterlimit="10"
//                                 points="22,18 22,23 2,23 2,18"
//                                 strokeLinejoin="round"
//                             />
//                             <rect
//                                 x="9"
//                                 y="13"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeMiterlimit="10"
//                                 width="6"
//                                 height="4"
//                                 strokeLinejoin="round"
//                             />
//                         </svg>
//                     </div>
//                     <div className="max-w-xl mb-6">
//                         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl sm:leading-none">
//                             {details.name}
//                         </h2>
//                         <p className="text-base text-indigo-800 md:text-lg">
//                             {details.description}
//                         </p>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center -mx-4 lg:pl-8">
//                     <div className="flex flex-col items-end px-3">
//                         <img
//                             className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
//                             src={details.screenshot[2]}
//                             alt=""
//                         />
//                         <img
//                             className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
//                             src={details.screenshot[1]}
//                             alt=""
//                         />
//                     </div>
//                     <div className="px-3">
//                         <img
//                             className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
//                             src={details.screenshot[0]}
//                             alt=""
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Project;