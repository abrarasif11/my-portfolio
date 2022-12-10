import { Link } from "react-router-dom";
import img1 from '../../assest/Screenshot (380).png'
import img2 from '../../assest/Screenshot (381).png'
import img3 from '../../assest/Screenshot (382).png'



const Projects = () => {


  const projects = [
    {
      index: 1,
      name: 'Goriber Seller',
      type: 'Resell Website of Mobile Phone',
      stack: 'Full Stack',
      description: 'One of the biggest Second hand phones online market  Here you can buy or sell your desired models phone We provide most of the brands of phone here.',
      screenshot: img1
    },
    {
      index: 2,
      name: 'MR.Travel Guider',
      type: 'Travel Website',
      stack: 'Responsive',
      description: 'I am a Professional Tourist Guide I have Experience guiding all over the world tourist places I do this very Professionally Below are some sample Packages of my tourist guide Service',
      screenshot: img2
    },
    {
      index: 3,
      name: 'Tech Pro',
      type: 'Learning Platform Website',
      stack: 'Front end',
      description: 'This is one of the Biggest Learning Online Platform',
      screenshot: img3
    }, 
  ]
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl font-montserrat md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="my-3  text-center text-4xl mb-10  font-bold">My <span className="text-indigo-800"> Projects</span></h1>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          
          {projects.map(p => <div key={p.index} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={p.screenshot}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling">
                  {p.type}
                </a>
                <span className="text-gray-600"> — {p.stack}</span>
              </p>
              <a
              
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-indigo-800"
              >
                {p.name}
              </a>
              <p className="mb-2 text-gray-700">
                {p.description} 
              </p>
            </div>
          </div>)}
        </div>
      </div>
    );
  };

  export default Projects;