import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AboutMe from './component/AboutMe/AboutMe';
import Blog from './component/Blogs/Blog';
import ContactMe from './component/ContactMe/ContactMe';
import Home from './component/Home/Home/Home';
import Main from './component/Layout/Main';
import Project from './component/Projects/Project';
import Projects from './component/Projects/Projects';
import Skill from './component/Skill/Skill';
const router = createBrowserRouter([
  {
    path: '/',
    element : <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/skill',
        element : <Skill></Skill>
      },
      {
        path : '/projects',
        element : <Projects></Projects>
      },
      {
        path : '/aboutMe',
        element : <AboutMe></AboutMe>
      },
      {
        path : '/contactMe',
        element : <ContactMe></ContactMe>
      },
      {
        path : '/blogs',
        element : <Blog></Blog>
      },
    ]
  }
])
function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
